import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';

function App() {
  const [pokemans, setPokemans] = React.useState([])
  const [currentUrl, setCurrentUrl] = React.useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setNextUrl] = React.useState()
  const [prevUrl, setPrevUrl] = React.useState()
  const [pokeInfo, setPokeInfo] = React.useState()

  React.useEffect(() => {
    fetch(currentUrl)
      .then(response => response.json())
      .then(data => {
        setPokemans(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
      });
  }, [currentUrl])

  function toNextPage() {
    if(nextUrl === null) {
      return
    }
    setCurrentUrl(nextUrl)
  }

  function toPrevPage() {
    if(prevUrl === null) {
      return
    }
    setCurrentUrl(prevUrl)
  }

  return (
    <div className="App">  
      <Routes>
        <Route exact path='/' element={<Home
          pokemans={pokemans}
          toNextPage={toNextPage}
          toPrevPage={toPrevPage}
          setPokeInfo={setPokeInfo}
        />} />
        <Route path='/pokemon' element={<Pokemon pokeInfo={pokeInfo} />} />
      </Routes>
    </div>
  );
}

export default App;

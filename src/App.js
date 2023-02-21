import React from 'react';
import './App.css';
import ChangePage from './ChangePage';

function App() {
  const [pokemans, setPokemans] = React.useState([])
  const [currentUrl, setCurrentUrl] = React.useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setNextUrl] = React.useState()
  const [prevUrl, setPrevUrl] = React.useState()

  React.useEffect(() => {
    fetch(currentUrl)
      .then(response => response.json())
      .then(data => {
        setPokemans(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
      });
  }, [currentUrl])

  const displayPokemans = pokemans.map(p => {
    return <h3 key={p.name}>{p.name}</h3>
  })

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
      <h1>Pokemon</h1>
      <ChangePage
        toNextPage={toNextPage}
        toPrevPage={toPrevPage}
      />
      {displayPokemans}
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

export default function Pokemon(props) {
    //const picture = props.pokeInfo.sprites.front_default
    const getUrl = props.pokeInfo
    const [pokeData, setPokeData] = React.useState({
        title: '',
        imgUrl: '',
        hp: '',
        xp: '',
        height: '',
        weight: '',
        attack: '',
        speed: '',
        abilities: [],
        types: []
    })

    React.useEffect(() => {
        fetch(getUrl)
            .then(response => response.json())
            .then(data => {
                const theAbilities = data.abilities.map(x => {
                    return x.ability.name
                })
                const theTypes = data.types.map(t => {
                    return t.type.name
                })
                setPokeData({
                    title: data.name.toUpperCase(),
                    imgUrl: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    xp: data.base_experience,
                    height: data.height,
                    weight: data.weight,
                    attack: data.stats[1].base_stat,
                    speed: data.stats[5].base_stat,
                    abilities: theAbilities.join(', '),
                    types: theTypes.join(', ')
                })
            });
    }, [getUrl])
    console.log(pokeData)
    
    return (
        <div className="pokemon">
            <button className="homebtn"><Link to='/' className="homebtn">Home</Link></button>

            <div className="card">
                <h2>{pokeData.title}</h2>
                <h4 className="xp">XP: {pokeData.xp}</h4>
                <img src={pokeData.imgUrl} alt='Pokemon' className="pokeImg" />
                <h3>Abilities: {pokeData.abilities}</h3>
                <h3>Types: {pokeData.types}</h3>
                <h3>Stats</h3><hr></hr>
                <h4>Height: {pokeData.height}</h4>
                <h4>Weight: {pokeData.weight}</h4>
                <h4>HP: {pokeData.hp}</h4>
                <h4>Attack: {pokeData.attack}</h4>
                <h4>Speed: {pokeData.speed}</h4>
            </div>   
        </div>
    )
}
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
                    title: data.name,
                    imgUrl: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    xp: data.base_experience,
                    height: data.height,
                    weight: data.weight,
                    attack: data.stats[1].base_stat,
                    speed: data.stats[5].base_stat,
                    abilities: theAbilities,
                    types: theTypes
                })
            });
    }, [getUrl])
    console.log(pokeData)

    /* let responseClone;
    React.useEffect(() => {
        fetch(getUrl)
            .then(response => {
                responseClone = response.clone()
                return response.json()
            })
            
            .then(data => {
                console.log(data)
            }, function(rejectionReason) {
                console.log('Error parsing JSON from response:', rejectionReason, responseClone);
                responseClone.text()
                .then(function (bodyText) {
                    console.log('Received the following instead of valid JSON:', bodyText); // 6
                });
            });
    }, [getUrl])*/
    
    return (
        <div className="pokemon">
            <button className="homebtn"><Link to='/' className="homebtn">Home</Link></button>
            <h3>{props.pokeInfo}</h3>
            <img src={pokeData.imgUrl} alt='Pokemon' />
        </div>
    )
}
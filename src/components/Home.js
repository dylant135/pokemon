import React from "react";
import ChangePage from "./ChangePage";
import { Link } from "react-router-dom";

export default function Home(props) {
    const displayPokemans = props.pokemans.map(p => {
        return <h3 key={p.name} onClick={() => props.setPokeInfo(p.url)}><Link to='/pokemon'>{p.name}</Link></h3>
      })
    return (
        <div className="home">
            <h1>Pokemon</h1>
            <ChangePage
                toNextPage={props.toNextPage}
                toPrevPage={props.toPrevPage}
            />
            {displayPokemans}
        </div>
    )
}
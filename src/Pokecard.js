import React from "react";
import "./Pokecard.css";

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function Pokecard ({id, name, type, base_experience}) {
    const imgSrc = `${POKE_API}${id}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{name}</div>
            <img src={imgSrc} className="Pokecard-image"></img>
            <div className="Pokecard-desc">{type}</div>
            <div className="Pokecard-desc">{base_experience}</div>
        </div>
    )
}

export default Pokecard;
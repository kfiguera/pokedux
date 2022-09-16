import React from 'react';
import PokemonCard from "./PokemonCard.jsx";
import './PokemonList.css';

const PokemonList = ({pokemons}) => {
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return (
                  <PokemonCard name={pokemon.name} image={pokemon.sprites.other.home.front_default} key={pokemon.id}/>
                );
            })}
        </div>
    );
};
PokemonList.defaultProps = {
    pokemons: Array(10).fill({name:'Charmander'})
};
export default PokemonList;

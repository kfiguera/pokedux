import React from 'react';
import PokemonCard from "./PokemonCard.jsx";
import './PokemonList.css';

const PokemonList = ({pokemons}) => {
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return (
                  <PokemonCard
                      name={pokemon.name}
                      image={pokemon.sprites?.front_default}
                      types={pokemon?.types}
                      id={pokemon.id}
                      favorite={pokemon.favorite}
                      key={pokemon.id}/>
                );
            })}
        </div>
    );
};
PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
};
export default PokemonList;

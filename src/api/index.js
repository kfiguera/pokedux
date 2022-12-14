import axios from "axios";

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';
export const getPokemon = () => {
    return axios
        .get(API_URL)
        .then((response) => response.data.results)
        .catch((error) => console.error(error));
}
export const getPokemonDetails = (pokemon) => {
    return axios
        .get(pokemon.url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
}
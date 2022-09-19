import {SET_POKEMON, SET_LOADING} from "./types";
import {getPokemonDetails} from "../api";

export const setPokemons = (payload) => ({
    type: SET_POKEMON,
    payload
});

export const setLoadings = (payload) => ({
    type: SET_LOADING,
    payload,
});

export const getPokemonWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonsDetailed = await Promise.all(pokemons.map(pokemon=>getPokemonDetails(pokemon)));
    dispatch(setPokemons(pokemonsDetailed));
};
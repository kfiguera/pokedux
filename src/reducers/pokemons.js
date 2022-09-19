import {SET_LOADING, SET_POKEMON} from "../actions/types.js";

const initialState = {pokemons: [], loading: false};

export const pokemonsReducer = (state, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {...state, pokemons: action.payload}
            break;
        case SET_LOADING:
            return {...state, loading: action.payload}
            break;
        default:
            return {...state};
            break;
    }
}
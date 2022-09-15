import {SET_POKEMON} from "../actions/types.js";

const initialState = {pokemons: []};

export const pokemonsReducer = (state, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {...state, pokemons: action.payload}
            break;
        default:
            return {...state};
            break;
    }
}
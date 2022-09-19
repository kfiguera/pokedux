import {SET_FAVORITE, SET_LOADING, SET_POKEMON} from "../actions/types.js";

const initialState = {pokemons: [], loading: false, favorites: []};

export const pokemonsReducer = (state, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {...state, pokemons: action.payload}
            break;
        case SET_LOADING:
            return {...state, loading: action.payload}
            break;
        case SET_FAVORITE:
            const newPokemonsList = [...state.pokemons];
            const currentPokemonIndex = newPokemonsList.findIndex(
                (pokemon) => {
                    return pokemon.id == action.payload.pokemonId;
                }
            );

            newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;

            if(currentPokemonIndex < 0){
                return state
            }else {
                return {...state, pokemons: newPokemonsList};
            }
            break;
        default:
            return {...state};
            break;
    }
}
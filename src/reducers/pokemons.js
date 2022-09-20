import {SET_FAVORITE, SET_POKEMON} from "../actions/types.js";
import {fromJS, get, getIn, setIn} from "immutable";

const initialState = fromJS({
    pokemons: [],
    favorites:[]
});

export const pokemonsReducer = (state, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return setIn(state,['pokemons'],fromJS(action.payload));
            break;
        case SET_FAVORITE:
            const currentPokemonIndex = get(state,'pokemons').findIndex(
                (pokemon) => {
                    return pokemon.get('id') == action.payload.pokemonId;
                }
            );
            if (currentPokemonIndex < 0) {
                return state
            }
            //const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite');
            const isFavorite = getIn(state,['pokemons',currentPokemonIndex,'favorite']);
            return setIn(state,['pokemons',currentPokemonIndex,'favorite'],!isFavorite);
            break;
        default:
            return {...state};
            break;
    }
}
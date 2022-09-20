import {SET_FAVORITE, SET_LOADING, SET_POKEMON} from "../actions/types.js";
import {fromJS, get, getIn, setIn} from "immutable";

const initialState = fromJS({
    pokemons: [],
    loading:false,
    favorites:[]
});

export const pokemonsReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case SET_POKEMON:
            //return {...state, pokemons: action.payload}
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
        case SET_LOADING:
            return setIn(state,['loading'],action.payload);
            break;
        default:
            return {...state};
            break;
    }
}
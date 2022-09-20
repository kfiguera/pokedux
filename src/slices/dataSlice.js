import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getPokemon, getPokemonDetails} from "../api/index";
import {setLoading} from "./uiSlice.js";

const initialState = {
    pokemons: [],
    pokemonsFiltered: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) =>{
        // dispatch loader
        dispatch(setLoading(true));
        // fetch
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map(pokemon=>getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
        // dispatch loader
        dispatch(setLoading(false));
    }
)
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.pokemonsFiltered = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(pokemon => {
                return pokemon.id === action.payload.pokemonId
            })

            const currentFilteredPokemonIndex = state.pokemonsFiltered.findIndex(pokemon => {
                return pokemon.id === action.payload.pokemonId
            })

            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite

                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            }

            if (currentFilteredPokemonIndex >= 0) {
                const isFavorite = state.pokemonsFiltered[currentFilteredPokemonIndex].favorite

                state.pokemonsFiltered[currentFilteredPokemonIndex].favorite = !isFavorite
            }
        },
        setFilter: (state, action) => {
            const pokemonsFiltered = state
                .pokemons
                .filter( pokemon => pokemon.name.includes( action.payload ) )
            state.pokemonsFiltered = pokemonsFiltered;
        }
    }
});

export const {setFavorite, setPokemons, setFilter } = dataSlice.actions;

export default dataSlice.reducer;
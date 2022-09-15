## Mi practica

### main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {pokemonsReducer} from "./reducers/pokemons";
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";
import './index.css'

const store = createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)
```
### App.jsx

```jsx
import {Col} from 'antd';
import Searcher from "./components/Searcher";
import {useEffect} from 'react'
import {connect} from 'react-redux'
import PokemonList from "./components/PokemonList.jsx";
import {getPokemon} from "./api";
import {setPokemons as setPokemonsActions} from "./actions/index.js";
import Logo from "./assets/logo.svg";
import './App.css'

function App({pokemons, setPokemons}) {
    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await getPokemon();
            setPokemons(response);
        }
        fetchPokemons();
    }, [])
    return (
        <div className="App">
            <Col span={4} offset={10}>
                <img src={Logo} alt="pokeapi"/>
            </Col>
            <Col span={8} offset={8}>
                <Searcher/>
            </Col>
            <PokemonList pokemons={pokemons}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    pokemons: state.pokemons
});
const mapDispatchToProps = (dispatch) => ({
    setPokemons: (value) => dispatch(setPokemonsActions(value))
})
export default connect(mapStateToProps,mapDispatchToProps)(App)

```
### reducers/pokemons.js
```jsx
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
```

### action/index.js
```jsx
import {SET_POKEMON} from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMON,
    payload
});
```
### action/types.js
```jsx
export const SET_POKEMON = 'SET_POKEMON';
```

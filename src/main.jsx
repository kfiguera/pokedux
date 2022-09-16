import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {pokemonsReducer} from "./reducers/pokemons";
import {Provider} from "react-redux";
import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import {featuring, logger} from "./middleware";
import './index.css'
const reduxDevToolsConfig = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composedEnhacers = compose(reduxDevToolsConfig, applyMiddleware(logger, featuring));

const store = createStore(pokemonsReducer,composedEnhacers);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)

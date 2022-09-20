import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import rootReducer from "./reducers/rootReducer";
import {Provider} from "react-redux";
import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import {logger} from "./middleware";
import thunk from "redux-thunk"
import './index.css'
// const reduxDevToolsConfig = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhacers = composeAlt(applyMiddleware(thunk,logger));

const store = createStore(rootReducer,composedEnhacers);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)

import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Col, Spin} from 'antd';
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList.jsx";
import Logo from "./assets/logo.svg";
import './App.css'
import {fetchPokemonsWithDetails} from "./slices/dataSlice.js";

function App() {
    //const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
    const pokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);
    const loading = useSelector((state) => state.ui.loading);
    //const loading = false;
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchPokemonsWithDetails())
    }, []);

    return (
        <div className="App">
            <Col span={4} offset={10}>
                <img src={Logo} alt="pokeapi"/>
            </Col>
            <Col span={8} offset={8}>
                <Searcher/>
            </Col>
            {loading ? (
                <Col offset={12} className="Spinner">
                    <Spin spinning size="large"/>
                </Col>
            ) : (
                <PokemonList pokemons={pokemons}/>
            )}

        </div>
    )
}

export default App;

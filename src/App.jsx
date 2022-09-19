import {Col, Spin} from 'antd';
import Searcher from "./components/Searcher";
import {useEffect} from 'react'
import PokemonList from "./components/PokemonList.jsx";
import {getPokemon} from "./api";
import {getPokemonWithDetails, setLoadings} from "./actions/index.js";
import Logo from "./assets/logo.svg";
import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const pokemons = useSelector(state => state.pokemons);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPokemons = async () => {
            dispatch(setLoadings(true))
            const response = await getPokemon();
            dispatch(getPokemonWithDetails(response));
            dispatch(setLoadings(false))
        }
        fetchPokemons();
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

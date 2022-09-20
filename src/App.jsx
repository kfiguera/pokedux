import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Col, Spin} from 'antd';
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList.jsx";
import {getPokemon} from "./api";
import {getPokemonWithDetails, setLoadings} from "./actions";
import Logo from "./assets/logo.svg";
import {get} from "immutable";
import './App.css'

function App() {
    const pokemons = useSelector(state => get(state,'pokemons'))?.toJS();
    const loading = useSelector(state => get(state,'loading'));
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

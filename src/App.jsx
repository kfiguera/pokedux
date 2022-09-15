import { Col } from 'antd';
import Searcher from "./components/Searcher";import {useEffect, useState} from 'react'
import PokemonList from "./components/PokemonList.jsx";
import Logo from "./assets/logo.svg";
import './App.css'
import {getPokemon} from "./api";

function App() {
    const [pokemons, setPokemons] = useState([])
    useEffect(()=> {
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
            <Searcher />
        </Col>
        <PokemonList pokemons={pokemons}/>
    </div>
  )
}

export default App

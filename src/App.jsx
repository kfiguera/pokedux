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

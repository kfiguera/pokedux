import { Col } from 'antd';
import Searcher from "./components/Searcher";import { useState } from 'react'
import './App.css'
import PokemonList from "./components/PokemonList.jsx";

function App() {
  return (
    <div className="App">
        <Col span={8} offset={8}>
            <Searcher />
        </Col>
        <PokemonList />
    </div>
  )
}

export default App

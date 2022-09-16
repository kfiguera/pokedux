import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta.js";
import {StarOutlined} from "@ant-design/icons";

const PokemonCard = ({name}) => {
    return (
        <>
            <Card
                title={name}
                cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png" alt="Charmander"/>}
                extra={<StarOutlined />}
            >
                <Meta description="Fire"/>
            </Card>
        </>

    );
};

export default PokemonCard;

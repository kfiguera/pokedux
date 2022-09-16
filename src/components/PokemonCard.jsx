import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta.js";
import {StarOutlined} from "@ant-design/icons";

const PokemonCard = ({name,image}) => {

    return (
        <>
            <Card
                title={name}
                cover={<img src={image} alt={name}/>}
                extra={<StarOutlined />}
            >
                <Meta description="Fire"/>
            </Card>
        </>

    );
};

export default PokemonCard;

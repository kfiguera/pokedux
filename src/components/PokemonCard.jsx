import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta.js";
import StarButton from "./StarButton.jsx";
import {useDispatch} from "react-redux";
import {setFavorite} from "../slices/dataSlice.js";


const PokemonCard = ({id, name, image, types, favorite}) => {
    const dispatch = useDispatch();
    const typesString = types?.map((item) => item.type.name).join(', ');
    const handleFavorite = () => {
        dispatch(setFavorite({pokemonId: id}));
    }
    return (
        <>
            <Card
                title={name}
                cover={<img src={image} alt={name}/>}
                extra={<StarButton isFavorite={favorite} onClick={handleFavorite}/>}
            >
                <Meta description={typesString}/>
            </Card>
        </>

    );
};

export default PokemonCard;

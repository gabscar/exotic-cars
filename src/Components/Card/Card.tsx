import React from "react";
import { CardDiv, CarImage, CarModel, CarTitle, TitleContainer, ValueContainer } from "./styles";
import { Cars } from "../../Screens/ListCars/ListCars";
import { useHistory } from 'react-router-dom';
interface card{
    data: Cars
}


const Card : React.FC<card> = ({data})=>{
    const hystory = useHistory();
    const {brand,price,image_card,model} =data;
    const handleDetailsPage = (car:Cars) => {
       
        hystory.push('/detail',car); 
      };
    return(
        <CardDiv onClick = {() => handleDetailsPage(data)}>
            <TitleContainer>
                <CarTitle>{brand}</CarTitle>
                <CarModel>{model}</CarModel>
            </TitleContainer>
            <CarImage src = {image_card}/>
            <ValueContainer>
                <h2>$</h2>
                <h1>{price}</h1>
                <p>/day</p>
            </ValueContainer>
        </CardDiv>
    )
}


export default Card;
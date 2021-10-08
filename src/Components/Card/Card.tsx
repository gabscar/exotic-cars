import React,{useState} from "react";
import { CardDiv, CarImage, CarModel, CarTitle, TitleContainer, ValueContainer } from "./styles";
import { Cars } from "../../Screens/ListCars/ListCars";
import { useHistory } from 'react-router-dom';
import { Loading } from "../LoadingComponent/LoadingComponent";
interface card{
    data: Cars
}


const Card : React.FC<card> = ({data})=>{
    const hystory = useHistory();
    const [isLoaded,setIsLoaded]=useState(false);
    const {brand,price,image_card,model} =data;
    const handleDetailsPage = (car:Cars) => {
        hystory.push(`/detail/${model}`,car); 
      };
    return(
        <CardDiv onClick = {() => handleDetailsPage(data)}>
            {isLoaded?null:<Loading/>}
            <TitleContainer>
                <CarTitle>{brand}</CarTitle>
                <CarModel>{model}</CarModel>
            </TitleContainer>
            <CarImage src = {image_card} onLoad = {()=>setIsLoaded(true)}/>
            <ValueContainer>
                <h2>$</h2>
                <h1>{price}</h1>
                <p>/day</p>
            </ValueContainer>
        </CardDiv>
    )
}


export default Card;
import React from 'react'
import { BackButton, DetailContainer, DetailTopContainer, ImageContainer, LogoCar, MidContainer, NumberColorContainer, TextContainer, TextPrice, TextTitleCar } from './styles'
import { FiArrowLeft } from "react-icons/fi";



const DetailCar:React.FC = () =>{

    return(
        <DetailContainer>
            <DetailTopContainer>
            <LogoCar >
                <img style= {{width: '100%',}} src = {dumbyData.brand_url}></img>
            </LogoCar>
            <TextContainer>
                <TextTitleCar>{dumbyData.brand} {dumbyData.model}</TextTitleCar>
                <TextPrice>$ {dumbyData.price}/day</TextPrice>
            </TextContainer>
            </DetailTopContainer>
            <MidContainer>
                <BackButton> <FiArrowLeft className = "arrow"size = {15}/>Back to catalog</BackButton>
                <ImageContainer>
                    <img src = {dumbyData.options[0].image_url}></img>
                    <NumberColorContainer>
                        <TextTitleCar>01</TextTitleCar>
                        <TextPrice>Silver</TextPrice>
                    </NumberColorContainer>
                </ImageContainer>
                
            </MidContainer>
        </DetailContainer>
    )
}


export default DetailCar;



const dumbyData={
    
    "id": 1,
    "brand": "Prosche",
    "model": "Panameira",
    "price": 825,
    "image_url": "https://imgur.com/O4M6izp.png",
    "brand_url": "https://i.imgur.com/jXGmNpA.png",
    "options": [
        {
        "option_id": 1,
        "color": "Silver",
        "image_url": "https://i.imgur.com/dg1sp7e.png"
        },
        {
        "option_id": 2,
        "color": "Yellow",
        "image_url": "https://i.imgur.com/zeUcDjD.png"
        },
        {
        "option_id": 3,
        "color": "Red",
        "image_url": "https://i.imgur.com/oPzG0Gx.png"
        }
    ]
      
}
import React,{useState} from 'react'
import { BackButton, BookContainer, BottomContainer, ButtonBook, DetailContainer, DetailTopContainer, ImageContainer, LogoCar, MidContainer, NumberColorContainer, TextContainer, TextPrice, TextTitleCar } from './styles'
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import Carrousel from '../../Components/Carrousel/Carrousel';



const DetailCar:React.FC = () =>{

    const [currentData,setCurrentData]= useState<any[]>(dumbyData.options)
    const nextSlide = () => {
        let aux = currentData
        let top = aux.shift()
        setCurrentData([...currentData,top])
        //setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        let aux = currentData
        let pop = aux.pop()
        setCurrentData([pop,...currentData])
        
        //setCurrent(current === 0 ? length - 1 : current - 1);
    };
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
                    <img src = {currentData[1].image_url}></img>
                    <NumberColorContainer>
                        <TextTitleCar>0{currentData[1].option_id}</TextTitleCar>
                        <TextPrice>{currentData[1].color}</TextPrice>
                    </NumberColorContainer>
                </ImageContainer>
                
            </MidContainer>
            <BookContainer>
                <ButtonBook>Book Now <FiArrowRight className = "arrowRight" size={15}/> </ButtonBook>
            </BookContainer>
            <BottomContainer>
                <Carrousel prevSlide={prevSlide} nextSlide={nextSlide} currentData={currentData}/>
            </BottomContainer>
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
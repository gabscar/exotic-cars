import React,{useState,useEffect} from 'react'
import { BackButton, BookContainer, BottomContainer, ButtonBook, DetailContainer, DetailTopContainer, ImageContainer, LogoCar, MidContainer, NumberColorContainer, TextContainer, TextPrice, TextTitleCar } from './styles'
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import Carrousel from '../../Components/Carrousel/Carrousel';
import {Cars} from '../ListCars/ListCars'
import { Location } from "history";
import { useLocation } from 'react-router';


interface locProps{
    
    id: number,
    brand: string,
    model: string,
    price: number,
    image_card: string,
    brand_img: string,
    options: []
    
}

const DetailCar:React.FC =() =>{
    const loc= useLocation<locProps>();
    console.log(loc.state)
    const {brand_img,brand,model,price,options}=loc.state;
    const [currentData,setCurrentData]= useState<any[]>(options.slice(0,3))
    const [currentIndex,setCurrentIndex] = useState(1);
  
    
    
    useEffect(() => {
        ChangeIndex();
        setCurrentIndex(1);
      }, [currentIndex]);
    
    
      function handleSelectActionModal(index: number) {
        if (index === 2) {
          setCurrentIndex(0);
         
        }
        if (index === 0) {
          setCurrentIndex(2);
      
        }
      }
    function ChangeIndex(){
        if (currentIndex === 0) {
            let aux = currentData;
            let shift = aux.shift();
            console.log(shift,aux)
            setCurrentData([...currentData,shift]);            
        }else if (currentIndex === 2) {
            let aux = currentData;
            let pop = aux.pop();
            setCurrentData([pop,...currentData]);
        }
    }
    return(
        <DetailContainer>
            <DetailTopContainer>
            <LogoCar >
                <img style= {{width: '100%',}} src = {brand_img}></img>
            </LogoCar>
            <TextContainer>
                <TextTitleCar>{brand} {model}</TextTitleCar>
                <TextPrice>$ {price}/day</TextPrice>
            </TextContainer>
            </DetailTopContainer>
            <MidContainer>
                <BackButton> <FiArrowLeft className = "arrow"size = {15}/>Back to catalog</BackButton>
                <ImageContainer>
                    <img src = {currentData[1].image}></img>
                    <NumberColorContainer>
                        <TextTitleCar>0{currentData[1].id_option}</TextTitleCar>
                        <TextPrice>{currentData[1].color}</TextPrice>
                    </NumberColorContainer>
                </ImageContainer>
                
            </MidContainer>
            <BookContainer>
                <ButtonBook>Book Now <FiArrowRight className = "arrowRight" size={15}/> </ButtonBook>
            </BookContainer>
            <BottomContainer>
                <Carrousel prevSlide={handleSelectActionModal} 
                           nextSlide={handleSelectActionModal} 
                           currentData={currentData} 
                           CurrentIndex={currentIndex}
                           />
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
    "image_card": "https://imgur.com/O4M6izp.png",
    "brand_img": "https://i.imgur.com/jXGmNpA.png",
    "options": [
        {
        "id_option": 1,
        "color": "Silver",
        "image": "https://i.imgur.com/dg1sp7e.png"
        },
        {
        "id_option": 2,
        "color": "Yellow",
        "image": "https://i.imgur.com/zeUcDjD.png"
        },
        {
        "id_option": 3,
        "color": "Red",
        "image": "https://i.imgur.com/oPzG0Gx.png"
        }
    ]
      
}
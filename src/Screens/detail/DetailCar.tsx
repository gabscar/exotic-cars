import React,{useState,useEffect} from 'react'
import { BackButton, BookContainer, BottomContainer, ButtonBook, DetailContainer, DetailTopContainer, ImageContainer, LogoCar, MidContainer, NumberColorContainer, TextContainer, TextPrice, TextTitleCar } from './styles'
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import Carrousel from '../../Components/Carrousel/Carrousel';



const DetailCar:React.FC = () =>{

    const [currentData,setCurrentData]= useState<any[]>(dumbyData.options)
    const [currentIndex,setCurrentIndex] = useState(1);
    const [move,setMove]= useState('')
    
    
    useEffect(() => {
        
        ChangeIndex()
       
       
        setTimeout(()=>{
            setMove('')
        },200)
        
        setCurrentIndex(1);
        

      }, [currentIndex]);
    
    
      function handleSelectActionModal(index: number) {
        if (index > currentIndex) {
          setCurrentIndex(0);
          setMove('left');
        }
        if (index < currentIndex) {
          setCurrentIndex(2);
          setMove('right');
        }
      }
    function ChangeIndex(){
        if (currentIndex === 0) {
            let aux = currentData;
            let shift = aux.shift();
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
                <img style= {{width: '100%',}} src = {dumbyData.brand_img}></img>
            </LogoCar>
            <TextContainer>
                <TextTitleCar>{dumbyData.brand} {dumbyData.model}</TextTitleCar>
                <TextPrice>$ {dumbyData.price}/day</TextPrice>
            </TextContainer>
            </DetailTopContainer>
            <MidContainer>
                <BackButton> <FiArrowLeft className = "arrow"size = {15}/>Back to catalog</BackButton>
                <ImageContainer>
                    <img src = {currentData[1].image}></img>
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
                <Carrousel prevSlide={handleSelectActionModal} 
                           nextSlide={handleSelectActionModal} 
                           currentData={currentData} 
                           AnimationMovie={move}
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
        "option_id": 1,
        "color": "Silver",
        "image": "https://i.imgur.com/dg1sp7e.png"
        },
        {
        "option_id": 2,
        "color": "Yellow",
        "image": "https://i.imgur.com/zeUcDjD.png"
        },
        {
        "option_id": 3,
        "color": "Red",
        "image": "https://i.imgur.com/oPzG0Gx.png"
        }
    ]
      
}
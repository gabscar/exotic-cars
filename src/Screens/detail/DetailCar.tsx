import React,{useState,useEffect} from 'react'
import { BackButton, BackButtonAux, BookContainer, BottomContainer, ButtonBook, ContainerNotCars, DetailContainer, DetailTopContainer, ImageContainer, LogoCar, MidContainer, NotCars, NumberColorContainer, TextContainer, TextPrice, TextTitleCar } from './styles'
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import Carrousel from '../../Components/Carrousel/Carrousel';
import {Cars} from '../ListCars/ListCars'
import { Location } from "history";
import { useLocation,useHistory } from 'react-router';
import { Loading } from '../../Components/LoadingComponent/LoadingComponent';


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
    const history = useHistory();
    const {brand_img,brand,model,price,options}=loc.state;
    const [currentData,setCurrentData]= useState<any[]>(options.slice(0,3))
    const [currentIndex,setCurrentIndex] = useState(0);
    const [logoIsLoaded, setLogoIsLoaded] = useState(false);
    const [mainIsLoaded, setMainIsLoaded] = useState(false);
    const [width,setWidth] = useState(window.innerWidth)
    
    console.log(options.length)
    
    useEffect(() => {
        ChangeIndex();
        if(options.length <3)
            setCurrentIndex(0)
        else
            setCurrentIndex(1);
    }, [currentIndex]);
    useEffect(()=>{
        function handleResize() {
            setWidth(window.innerWidth)
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    },[width])  
    console.log(width)
    function handleSelectActionModal(index: number) {
    if (index >currentIndex) {
        setCurrentIndex(index);
    }
    if (index <currentIndex) {
        setCurrentIndex(currentIndex);
    }
    }
    function ChangeIndex(){
        
        if (currentIndex < 1) {
            let aux = currentData;
            let shift = aux.shift();
            setCurrentData([...currentData,shift]);            
        }else if (currentIndex > 1) {
            let aux = currentData;
            let pop = aux.pop();
            setCurrentData([pop,...currentData]);
        }
       
    }
    function handleListGoBack(){
        history.goBack();
    }
    return(
        options.length===0? <ContainerNotCars>
                                <NotCars>No vehicles avaliable </NotCars>
                                <BackButtonAux onClick = {handleListGoBack}>
                                    <FiArrowLeft className = "arrow" size = {15}/>Back to catalog    
                                </BackButtonAux>
                            </ContainerNotCars>: 
            <DetailContainer>
                <DetailTopContainer>
                <LogoCar >
                    {logoIsLoaded ? null : (
                        <Loading/>
                    )}
                    <img style= {{width: '100%',}} src = {brand_img} onLoad={()=>setLogoIsLoaded(true)}></img>
                </LogoCar>
                <TextContainer>
                    <TextTitleCar>{brand} {model}</TextTitleCar>
                    <TextPrice>$ {price}/day</TextPrice>
                </TextContainer>
                </DetailTopContainer>
                <MidContainer>
                    <BackButton onClick = {handleListGoBack}> <FiArrowLeft className = "arrow"size = {15}/>Back to catalog</BackButton>
                    <ImageContainer>
                        {mainIsLoaded? null : <Loading/>}
                        <img src = {currentData[currentIndex].image} onLoad={()=>setMainIsLoaded(true)}></img>
                        <NumberColorContainer>
                            <TextTitleCar>0{currentData[currentIndex].id_option}</TextTitleCar>
                            <TextPrice>{currentData[currentIndex].color}</TextPrice>
                        </NumberColorContainer>
                    </ImageContainer>
                    
                </MidContainer>
                <BookContainer>
                    <ButtonBook>Book Now <FiArrowRight className = "arrowRight" size={15}/> 
                    </ButtonBook>
                    {width>700?null: <BackButtonAux onClick = {handleListGoBack}>
                        <FiArrowLeft className = "arrow" size = {15}/>Back to catalog    
                    </BackButtonAux>}
                </BookContainer>
                {}
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
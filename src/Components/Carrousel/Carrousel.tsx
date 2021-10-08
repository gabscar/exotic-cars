import React, {useState} from 'react'
import { CarrouselContainer } from './styles';
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
import { Loading } from '../LoadingComponent/LoadingComponent';
interface carrousel{
    nextSlide: (index:number)=>void;
    prevSlide: (index:number)=>void;
    currentData: any[];
    CurrentIndex:number;
}

const Carrousel : React.FC<carrousel> = ({nextSlide,prevSlide,currentData,CurrentIndex})=>{
   
    const [optionIsLoaded, setOptionIsLoaded] = useState(false);
    
    
  
    return(
        <CarrouselContainer>
            <BsFillArrowLeftCircleFill className='arrow' onClick={()=>prevSlide(CurrentIndex-1)} />
            {currentData.map((slide, index) => {
               
                return (
                <>
               { <div
                    className={CurrentIndex === index ? 'slide active' : 'slide'}
                    key={index}
                >
                    <div onClick={index>CurrentIndex?()=>nextSlide(CurrentIndex+1)
                        :index<CurrentIndex?()=>prevSlide(CurrentIndex-1):()=>prevSlide(CurrentIndex)}>
                        {optionIsLoaded? null : <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}><Loading/></div>}
                        <img className={CurrentIndex === index ? 'img-active' : 'img'}src={slide.image} onLoad={()=>setOptionIsLoaded(true)} />
                    </div>
                  
                </div>
                }
                </>
                );
            })}
            <BsFillArrowRightCircleFill className='arrow' onClick={()=>nextSlide(CurrentIndex+1)} />
        </CarrouselContainer>
    )
}


export default Carrousel;


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
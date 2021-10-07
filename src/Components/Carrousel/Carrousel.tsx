import React, {useState} from 'react'
import { CarrouselContainer } from './styles';
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FiArrowLeft,FiArrowRight } from "react-icons/fi";
interface carrousel{
    nextSlide: (index:number)=>void;
    prevSlide: (index:number)=>void;
    currentData: any[];
    AnimationMovie: string;
    CurrentIndex:number;
}

const Carrousel : React.FC<carrousel> = ({nextSlide,prevSlide,currentData,AnimationMovie,CurrentIndex})=>{
    const [current, setCurrent] = useState(1);
    
    
  
    return(
        <CarrouselContainer transition={AnimationMovie}>
            <BsFillArrowLeftCircleFill className='arrow' onClick={()=>prevSlide(CurrentIndex-1)} />
            {currentData.map((slide, index) => {
               
                return (
                <>
                
                
               { <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    <div>
                        <img className={index === current ? 'img-active' : 'img'}src={slide.image} />
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
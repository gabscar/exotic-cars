import React, {useState} from 'react'
import { CarrouselContainer } from './styles';
import { BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
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
            { currentData.length>1?<BsFillArrowLeftCircleFill className='arrow' onClick={()=>prevSlide(CurrentIndex-1)} />:
                <BsFillArrowLeftCircleFill className='arrow' onClick={()=>prevSlide(CurrentIndex)}/>
            }
            {currentData.map((slide, index) => {
               
                return (
                <>
               { <div
                    className={CurrentIndex === index ? 'slide active' : 'slide'}
                    key={index}
                >
                    <div  style={{cursor:'pointer'}}onClick={index>CurrentIndex?()=>nextSlide(CurrentIndex+1)
                        :index<CurrentIndex?()=>prevSlide(CurrentIndex-1):()=>prevSlide(CurrentIndex)}>
                        {optionIsLoaded? null : <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}><Loading/></div>}
                        <img className={CurrentIndex === index ? 'img-active' : 'img'}src={slide.image} onLoad={()=>setOptionIsLoaded(true)} />
                    </div>
                </div>
                }
                </>
                );
            })}
            {currentData.length>1?<BsFillArrowRightCircleFill className='arrow' onClick={()=>nextSlide(CurrentIndex+1)} />:
                <BsFillArrowRightCircleFill className='arrow' onClick={()=>nextSlide(CurrentIndex)} />
            }
        </CarrouselContainer>
    )
}


export default Carrousel;


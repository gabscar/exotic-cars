import React, {useState} from 'react'
import { CarrouselContainer } from './styles';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

interface carrousel{
    nextSlide: ()=>void;
    prevSlide: ()=>void;
    currentData: any[];
}

const Carrousel : React.FC<carrousel> = ({nextSlide,prevSlide,currentData})=>{
    const [current, setCurrent] = useState(1);
    const length = dumbyData.options.length;
    
    

    return(
        <CarrouselContainer>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {currentData.map((slide, index) => {
                return (
                <>
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    <div>
                        <img src={slide.image_url} alt='travel image' className='image' />
                    </div>
                  
                </div>
                
                </>
                );
            })}
        </CarrouselContainer>
    )
}


export default Carrousel;


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
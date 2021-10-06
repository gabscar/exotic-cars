import React, {useState} from 'react'


const Carrousel : React.FC = ()=>{
    const [current, setCurrent] = useState(0);
    const length = dumbyData.options.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return(
        <div></div>
    )
}


export default Carrousel;


const dumbyData={
    
    "id": 1,
    "brand": "Prosche",
    "model": "Panameira",
    "price": 825,
    "image_url": "https://imgur.com/O4M6izp.png",
    "brand_url": "https://imgur.com/4Udq52s.png",
    "options": [
        {
        "option_id": 1,
        "color": "orange",
        "image_url": "https://stimg.cardekho.com/images/car-images/930x620/Porsche/Panamera/8332/1623302208231/226_orange_c04826.jpg?tr=w-898.png"
        },
        {
        "option_id": 2,
        "color": "black",
        "image_url": "https://stimg.cardekho.com/images/car-images/930x620/Porsche/Panamera/8332/1623302208231/235_black_1d2228.jpg?tr=w-898.png"
        },
        {
        "option_id": 3,
        "color": "red",
        "image_url": "https://stimg.cardekho.com/images/car-images/930x620/Porsche/Panamera/8332/1623302208231/233_jam-red_670f18.jpg?tr=w-898.png"
        }
    ]
      
}
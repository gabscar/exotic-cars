import styled, {keyframes} from "styled-components";



export const CarrouselContainer = styled.div`
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    transition-duration: 3s ease-out;
    .right-arrow {
        position: absolute;
        top: 50%;
        right: 0;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: absolute;
        top: 50%;
        left: 0;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }
    .slide {
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            display: flex;
            justify-content: center;
            background-color: #D2D2D2;
            width: 180px;
            border-radius: 30px;
        }
        div img{
           
            height: 180px;
            width: 280px;
        }
        transition-property: opacity;
        transition-duration: 3s ease-out;
        z-index: -1;
       
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.2);
        div{
            display: flex;
            background-color: #F3F1FC;
            width: 230px;
            border-radius: 30px;
            
        }
         div img{
            
            height:240px;
            width: 350px;
            transform: translateX(20);
        }
        z-index: 1;
        width: 50%;
        height: 100%;
       
       
    }

    
`
export const ImageContainer = styled.div<{selected:boolean}>`
   
`;

export const ImageCar = styled.img`
    width:700px;
    display: flex;
    margin-right:230px;
`;



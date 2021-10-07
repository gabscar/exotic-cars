import styled, {keyframes,css} from "styled-components";

const SlideOutRigthAnimation = keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden;
        transform: translate3d('100%', 0, 0);
    }
`;
const SlideOutLeftAnimation = keyframes`
    from {
    transform: translate3d(0, 0, 0);
    }

    to {
        visibility: hidden;
        transform: translate3d('-100%', 0, 0);
    }
`;


export const CarrouselContainer = styled.div<{transition:string}>`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    height: 400px;
    transform: scale(1);
    transition-delay: 1s;
    .arrow {
        height: 50px;
        width: 50px;
        color: #000;
        z-index: 3;
        cursor: pointer;
        user-select: none;
    }
    .slide {
        display: flex;
        justify-content: center;
        align-items: center;
 
        user-select: none;
        div{
            display: flex;
            justify-content: center;
            background-color: #D2D2D2;
            width: 280px;
            border-radius: 30px;
        }
        div .img{
           transform: translateX(15%);
            height: 180px;
            width: 330px;
            
        }
    }

    .slide.active {
        opacity: 1;
        user-select: none;
        
       
        div{
            display: flex;
            background: rgb(208,201,249);
            background: linear-gradient(90deg, rgba(208,201,249,1) 19%, rgba(212,207,239,1) 38%, rgba(218,213,245,1) 100%);
            width: 330px;
            border-radius: 30px;
            transform: translateY(-20%);
           
        }
         div .img-active{
            transform: translateY(10%);
            height:240px;
            width: 450px;
            transition-duration: 1s;
            animation: ${({transition})=>transition==='rigth'&& css`0.5s ${SlideOutRigthAnimation}`};
            animation: ${({transition})=>transition==='left'&& css`0.5s ${SlideOutLeftAnimation}`};
        }
      
        height: 100%;  
           
    }
    @media (max-width:1700px){
        .slide {
            div{
            
                width: 200px;
            }
            div .img{
                height: 160px;
                width: 260px;
            }
        }
        

        .slide.active {
       
            div{
            
                width: 300px;
               
            }
            div .img-active{
                height:220px;
                width: 400px;
                transform: translateY(5%);
            }
        
             
           
        }
    }
    @media (max-width:1550px){
        .slide {
            div{
            
                width: 180px;
            }
            div .img{
                height: 140px;
                width: 230px;
            }
        }
        .slide.active {
       
            div{
            
                width: 250px;
               
            }
            div .img-active{
                height:200px;
                width: 330px;
                transform: translateY(5%);
            }
        }
    }
    @media (max-width:1300px){
        .slide {
            div{
            
                width: 160px;
            }
            div .img{
                height: 120px;
                width: 210px;
            }
        }
        

        .slide.active {
       
            div{
            
                width: 210px;
               
            }
            div .img-active{
                height:180px;
                width: 290px;
                transform: translateY(5%);
            }
        
             
           
        }
    }
    @media (max-width:1100px){
        justify-content: center;
        .arrow{
            height: 40px;
            width: 40px;
        }
        .slide {
            div{
            
               width: 140px;
               margin-left: 40px;
               margin-right: 60px;
            }
            div .img{
                height: 100px;
                width: 180px;
            }
        }
        

        .slide.active {
            margin-left: 30px;
            div{
            
                width: 180px;
               
            }
            div .img-active{
                height:160px;
                width: 250px;
                transform: translateY(5%);
            }
        
             
           
        }
    }
    @media (max-width:1000px){
        justify-content: center;
        .slide {
            div{
            
               width: 130px;
               margin-left: 40px;
               margin-right: 60px;
            }
            div .img{
                height: 100px;
                width: 160px;
            }
        }
        

        .slide.active {
            margin-left: 30px;
            div{
            
                width: 200px;
               
            }
            div .img-active{
                height:180px;
                width: 290px;
                transform: translateY(5%);
            }
        
             
           
        }
    }
    
`




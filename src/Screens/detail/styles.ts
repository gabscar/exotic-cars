import styled, {keyframes} from "styled-components";



export const DetailContainer = styled.div`
    flex-direction: column;
    justify-content: center;
    margin-top: 53px;
    
`

export const DetailTopContainer = styled.div`
    margin-left: 10%;
    flex-direction: row;
    display: flex;
  
`

export const LogoCar = styled.div`
    max-width:91px;
    max-height: 123px;
    justify-content: center;
    align-items: center;
    @media (max-width:1000px){
       
            width: 60px;
            height: 70%;
        
    }
    @media (max-width:900px){
       
       width: 50px;
       height: 70%;
   
}
`
export const TextContainer = styled.div`
    flex-direction: column;
    padding-left: 39px;
`
export const TextTitleCar = styled.h1`
    font: normal normal bold 50px Segoe UI;
    color: #313136;
    @media (max-width:1100px){
        font-size: 40px;
    }
    @media (max-width:1000px){
        font-size: 35px;
    }
    @media (max-width:900px){
        font-size: 25px;
    }
`
export const TextPrice = styled.h2`
    font: normal normal 300 40px Segoe UI;
    @media (max-width:1100px){
        font-size: 35px;
    }
    @media (max-width:1000px){
        font-size: 30px;
    }
    @media (max-width:900px){
        font-size: 20px;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1100px;
    @media (max-width:1300px){
        img {
            width: 89%;
            height: 60%;
        }
    }
    @media (max-width:1000px){
        img {
            width: 80%;
            height: 60%;
        }
    }
    @media (max-width:900px){
        img {
            width: 85%;
            height: 60%;
        }
    }
   
`

export const MidContainer = styled.div`
     flex-direction:row;
     display: flex;
     justify-content: center;
     align-items: center;
     margin-bottom: 0;
`
export const BackButton = styled.button`
    width: 177px;
    height: 50px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    font: normal normal 300 18px Segoe UI;
    .arrow{
        margin-left: 4px;
        margin-right: 4px;
    }
    @media (max-width:1300px){
        .arrow{
        margin-left: 2px;
        margin-right: 2px;
    }
        margin-left: 2%;
        width: 170px;
        font-size: 12px;
    }
    @media (max-width:1260px){
        .arrow{
            margin-left: 2px;
            margin-right: 2px;
        }
        
        width: 190px;
        font-size: 11px;
    }
    @media (max-width:1000px){
        width: 30%;
        
        font-size: 12px;
    }

    @media (max-width:900px){
        .arrow{
            width: 10px;
            height: 10px;
        }
        width: 20%;
    }
    @media (max-width:800px){
        .arrow{
            width: 8px;
            height: 8px;
        }
        width: 30%;
    }
    @media (max-width:700px){
        .arrow{
            width: 20px;
            height: 20px;
        }
        width: 20%;
        border-radius: 60px;
        font-size: 0px;
        line-height: 0;
    }
`

export const NumberColorContainer = styled.div`
    position: absolute;
    right: 110px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (max-width:1200px){
        right: 9%;
    }
    @media (max-width:1000px){
        right: 10%;
        
    }
    @media (max-width:900px){
        right: 10%;
    }
  

`

export const BottomContainer = styled.div`
     width: 80%;
     margin: 0 auto;
     height: 300px;
`
export const BookContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
`
export const ButtonBook = styled.button`
    justify-content: center;
    align-items: center;
    font: normal normal 300 16px/21px Segoe UI;
    letter-spacing: 0px;
    color: white;
    background: #313136 0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 20px #0000001A;
    border-radius: 25px;
    width: 177px;
    height: 50px;
    display: flex;
    cursor: pointer;
    .arrowRight{
        margin-left:4px;
    }

`
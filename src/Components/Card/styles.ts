import styled from 'styled-components';


export const CardDiv = styled.div`
    width: 287px;
    height: 223px;
    background: #F8F8FA 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    margin-right: 24px;
    margin-bottom: 32px;
`

export const TitleContainer = styled.div`
    flex-direction:column;
    padding-left: 20px;
    padding-top: 10px;
`


export const CarTitle = styled.p`
    text-align: left;
    font: normal normal bold 17px/22px Segoe UI;
    letter-spacing: 0px;
    color: #313136;
`

export const CarModel = styled.p`
    text-align: left;
    font: normal normal 300 17px/22px Segoe UI;
    letter-spacing: 0px;
    color: #313136;
`

export const CarImage = styled.img`
    width: 244px;
    height: 137px;
    align-self: center;
    justify-self: center;
   
`

export const ValueContainer = styled.div`
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h2 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 10px;
    }
    h1 {
        font-size: 1.5rem;
    }
    p {
        display: flex;
        font-size: 0.875rem;
        font-weight: 300;
        margin-left: 0.2rem;
    }
`

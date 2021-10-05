import styled from 'styled-components';


export const CardContainer = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 110px 20px 110px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 22px;

    @media (max-width: 900px) {
        flex-direction: column;
        display: flex;
        padding: 0px 0px 0px 0px;
        justify-content: center;
        align-items: center;
    }
    @media (max-width:1000px){
        grid-template-columns: 1fr 1fr ;
    }
`

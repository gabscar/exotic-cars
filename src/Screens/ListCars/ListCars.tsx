import React, {useEffect,useState} from "react"
import Card from "../../Components/Card/Card";
import { CardContainer, TopBtn } from "./styles";
import api from '../../Services/api';
import ScrollTop from "../../Components/ScrollTop/ScrollTop";


export interface Cars{
    id: number,
    brand: string,
    model: string,
    price: number,
    image_card: string,
    brand_img: string,
    options: []
}

const ListCars :React.FC = ()=>{
    const [data, setData]= useState<Cars[]>([]);
  
    useEffect(()=>{
        getCars();
    },[])
    
    
    async function getCars() {
        try{
            api.get('/cars')
            .then((response)=>response.data)
            .then((data)=>{
                setData(data);
            })
            
         
        }catch(err){
            console.log(err)
        }
    }
    function RenderCars(){
        if(data){
            return(
                data.map((item:Cars)=>(
                    <Card data={item} key={item.id}/>
                ))
            )
        }
        return <p>sem carros</p>
    }
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <CardContainer>
                {RenderCars()}
            </CardContainer>
            <ScrollTop/>
        </div>
    )
}

export default ListCars;
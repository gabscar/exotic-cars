import React, {useEffect,useState} from "react"
import Card from "../../Components/Card/Card";
import { CardContainer } from "./styles";
import api from '../../Services/api';


export interface Cars{
    id: number,
    brand: string,
    model: string,
    price: number,
    image_url: string,
    brand_url: string,
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
        <CardContainer>
            {RenderCars()}
        </CardContainer>
    )
}

export default ListCars;
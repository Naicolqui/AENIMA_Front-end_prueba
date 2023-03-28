import React, {useEffect, useState} from "react";
import CardInfo from "./CardInfo";
import './css/Cards.scss'
import jsonData from '../json/cardsInfo.json';
//import { getCards} from "../actions";

//En este archivo renderizo todas las cards del archivo Card.jsx con la información que traigo desde el json


export default function Cards(){
    // let actualState = useSelector(state => state.cardsInfo);
    // const dispatch = useDispatch();

    //---------------------------Map de las Card para traer la info-----------------------------------
    //Llamo a las cartas con el useEffect: asi simulo el estado de vida de los componentes y 
    //despacho la acción que necesito.
    // useEffect(()=>{
    //     dispatch(getCards())
    // }, [dispatch]);

    const [cards, setCards] = useState([])

	useEffect(() => {
		// fetch(jsonData)
		// .then(response => response.json())
		// .then(datos => {
		// 	setCards(datos)
		// })
    }, [])


    //-------------------------------------Renderizado-------------------------------------

    return (
        <div className="containter">
            <div>
                <div className="cards">
                {
                jsonData.length > 0 ? jsonData.map(b=>
                  <div className="cardsMaped">
                         <CardInfo key={b.title} title={b.title} img={b.img} newC={b.newC} description={b.description} description2={b.description2}/>
                  </div>
                  ) : 
                  <div>
                    loading...
                  </div>
                } 
                </div>
            </div>
        </div>
    )
}





















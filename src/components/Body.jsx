import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export default function Body(){
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch("../json/cardsInfo.json").then(r=> r.json())
        .then(data => setCards(data))
    },[])
    console.log("data: ", cards);
    render(
        <div>

        </div>
    )
}
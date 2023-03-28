import React from "react";
import Cards from "./Cards";
import './css/Body.scss';

export default function Body(){
    return(
        <div className="bodyContainer">
            <div className="tendenciasContainer">
                <h2>TENDENCIAS</h2>
                <Cards/>
            </div>

            <div className="blogContainer">
                <h2>BLOG</h2>
                <div className="backContainer"></div>
                
            </div>

        </div>
    )
}
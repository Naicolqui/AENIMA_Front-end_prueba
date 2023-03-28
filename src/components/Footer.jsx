import React from "react";
import viajes from '../Assets/logo/logo_02.png';
import face from '../Assets/iconos/facebook.png';
import ig from '../Assets/iconos/instagram.png';
import './css/Footer.scss';


export default function Footer(){
    return(
        <div className="backGround">
            <div className="logo">
                <img src={viajes} alt="logo"/>
            </div>
            <div className="redes">
                <img src={face} alt="face"/>
                <img src={ig} alt="ig"/>
            </div>
        </div>
    )
}
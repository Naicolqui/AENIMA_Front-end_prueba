import React from "react";
import back from "../Assets/img/Viajes_Hero.jpg";
import location from "../Assets/iconos/ic_pin.png";
import arrow from "../Assets/iconos/arrow.png";
import './css/Banner.scss';

export default function Banner (){
    return(
        <div className="banner">
            {/* <img alt="not found" className="backgroundImage" src={back}/> */}
            <div className="rightContainer">
                <div className="title">
                    <img alt="not found" src={location}/>
                    <h1>AMÉRICA DEL SUR</h1>
                </div>
                <div className="description">
                    <h3>
                        Lugares maravillosos por América del Sur
                    </h3>
                    <h5>
                        Estos son algunos lugares que elijen la mayoría de los turistas que visitan América del Sur.
                    </h5>
                </div>
            </div>
            <div className="sticky">
                <div className="stickyTitle">
                    <h4>
                        PRÓXIMA AVENTURA
                    </h4>
                    <img alt="" src={arrow}/>
                </div>
                <h5>
                    Europa Meridional
                </h5>
                <h6>
                    Forman parte veinte paises. <br/> ej. España, Fancia, etc.
                </h6>
            </div>
            <div className="number">
                <div className="line"/>
                <div className="circle"><div><h3>01</h3></div></div>
            </div>
        </div>
    )
}
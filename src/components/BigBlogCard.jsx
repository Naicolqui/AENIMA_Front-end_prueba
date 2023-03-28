import React from "react";
import Card from 'react-bootstrap/Card';
import clock from '../Assets/iconos/time.png';
import './css/BigCards.scss'

export default function BigBlogCard({title, description, time, category, img}){
    return(
        <Card className="bg-dark text-white imageCardCont">
        <Card.Img className="imgImg" src={img} alt="Card image" />
        <Card.ImgOverlay className="bodyImg">
            <Card.Title className="titleIMG">{title}</Card.Title>
            <h3>{category}</h3>
            <Card.Text className="descImg">
                {description}
            </Card.Text>
            <div className='timeCont'>
                <img src={clock} alt="clock"/>
                <Card.Text className='timeText'>
                    Hace: {time}
                </Card.Text>
            </div>
        </Card.ImgOverlay>
        </Card>
    )
}
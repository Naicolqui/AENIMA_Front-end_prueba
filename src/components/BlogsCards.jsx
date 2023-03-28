import React from "react";
import './css/BlogCards.scss'
import jsonData from '../json/blog.json';
import BigBlogCard from "./BigBlogCard";
import SmallBlogCard from "./SmallBlogCard";
import jsonData2 from '../json/blogSmall.json'

export default function BlogCards(){
    return(
        <div className="blogCardContainter">
                <div className="bigCards">
                
                {
                jsonData.length > 0 ? jsonData.map(b=>
                  <div className="bigCardsMaped">
                         <BigBlogCard key={b.title} title={b.title} img={b.img} time={b.time} description={b.description} category={b.category}/>
                  </div>
                  ) : 
                  <div>
                    loading...
                  </div>
                } 
                </div>
                
                <div className="smallCards">
                {
                jsonData2.length > 0 ? jsonData2.map(b=>
                  <div className="smallCardsMaped">
                         <SmallBlogCard key={b.title} title={b.title} img={b.img} time={b.time} description={b.description} category={b.category}/>
                  </div>
                  ) : 
                  <div>
                    loading...
                  </div>
                } 
                </div>
        </div>
    )
}
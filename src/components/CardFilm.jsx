import React, { useState } from 'react'
import styles from "../assets/styles/cardfilm.module.css"
import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Carousel = CarouselModule.default;

const CardFillm = ({showInfo}) => {
 const [fav,Setfav]=useState(false)

 const getFav =()=>{
      Setfav(!fav)
     
      console.log(fav);
      
 }

 const responsive = {
   superLargeDesktop: {
     // the naming can be any, depends on you.
     breakpoint: { max: 4000, min: 3000 },
     items: 5
   },
   desktop: {
     breakpoint: { max: 3000, min: 1024 },
     items: 3
   },
   tablet: {
     breakpoint: { max: 1024, min: 768 },
     items: 2
   },
   mobile: {
     breakpoint: { max: 767, min: 0 },
     items: 1
   }
 };
   console.log(showInfo);
  
   return (
     <Carousel responsive={responsive}>
           {showInfo.map(item => (<div className={styles.cards}>
           <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
           <h3>{item.name}</h3>
           <p>{item.overview}</p>
        </div>))}
       

      </Carousel>
      
  )
 }

 export default CardFillm
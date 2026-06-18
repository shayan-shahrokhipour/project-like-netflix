import React, { useEffect, useState } from 'react'
import styles from "../assets/styles/cardfilm.module.css"
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const CardFillm = ({showInfo}) => {
 const [index , setIndex]= useState(0);
 const [getwidth,setGetwidth]=useState(window.innerWidth)
 const [like ,setLike]=useState({})
 
 useEffect(()=>{
  const handleResize=()=>setGetwidth(window.innerWidth)
  window.addEventListener("resize",handleResize)
  return ()=> window.removeEventListener("resize",handleResize)
 },[])
 

  const firstColumn = showInfo.slice(index,index + 1)



  const triplet = showInfo.slice(index,index+3)
   
   const moveCarouselRight=()=>{
    if(index < showInfo.length-3 || index < showInfo.length -1){
      setIndex(index+1)
    }
   }
   console.log(index);
   
    const moveCarouselLeft=()=>{
      if(index>0){
            setIndex(index-1)

      }
   }

 //end of carousel 
    const iconHandeler=(item)=>{
       setLike(like => ({...like,[item.id] : !like[item.id]}))
    }
   return (
    <>
      <section className={styles.cardHolder}>

       {getwidth <= 767 ? firstColumn.map(item => (
        <div key={item.id} className={styles.cards}>
        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
           <h3>{item.name}</h3>
         <p>{item.overview}</p>
       </div>))
       :
        triplet.map(item =>(<div key={item.id} className={styles.cards} >
                            <FaHeart style={{color: like[item.id]? "red" : "white"}} className={styles.heartIcon} onClick={()=>iconHandeler(item)}/>
        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
         <h3>{item.name}</h3>
         <p>{item.overview}</p>
       </div>))       
       }
           <div className={styles.arrowHolder}>
            <IoIosArrowBack onClick={moveCarouselLeft} className={`${styles.ArrowBack} ${styles.same_css_forIcon}`}/>
            <IoIosArrowForward onClick={moveCarouselRight} className={`${styles.ArrowForward} ${styles.same_css_forIcon}`}/>

          </div>  

    </section>
       

    
    
    </>      
  )
 }

 export default CardFillm
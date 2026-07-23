import React, { createContext, useEffect, useState } from "react";
import styles from "../assets/styles/cardfilm.module.css";

import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { LikeSend } from "../context/LikeContext";
import Category from "./Category";

//createContext

const CardFillm = ({ showInfo,iconHandeler,showDetails,setShowDetails}) => {
  const [index, setIndex] = useState(0);
  const [getwidth, setGetwidth] = useState(window.innerWidth);
  const [popular ,setPopular]=useState([])
  const getlike = useContext(LikeSend);
  const { like, setLike } = getlike;
  

const categoryHandeler=()=>{
   const sortList =   [...showInfo].sort((a,b)=>{
        const firstPopularty = a.popularity 
        const secondPopularity = b.popularity
          return secondPopularity - firstPopularty  
       })  
       setPopular(sortList.slice(0,6))  
         
       }

       const allHandeler=()=>{
           setPopular(showInfo)

       }



  useEffect((item) => {
    const handleResize = () => setGetwidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

     
    
  }, []);
  
  

   
  const firstColumn = showInfo.slice(index, index + 1);

  const triplet = showInfo.slice(index, index + 3);

  const moveCarouselRight = () => {
    if (index < showInfo.length - 3 || index < showInfo.length - 1) {
      setIndex(index + 1);
    }
  };

  const moveCarouselLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  //end of carousel
  

  return (
    <>
     <div className={styles.info}>
      <h1>List Of Movies</h1>
       <section className={styles.cardHolder}>
        {getwidth <= 767
          ? firstColumn.map((item) => (
              <div key={item.id} className={styles.cards}>
                <FaHeart
                  style={{ color: like[item.id] ? "red" : "white" }}
                  className={styles.heartIcon}
                  onClick={() => iconHandeler(item)}
                />
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <h3>{item.name}</h3>
                <p>{item.overview}</p>
              </div>
            ))
          : triplet.map((item) => (

              <div key={item.id} className={styles.cards}>
                <FaHeart
                  style={{ color: like[item.id] ? "red" : "white" }}
                  className={styles.heartIcon}
                  onClick={() => iconHandeler(item)}
                />
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt=""
                />
                <h3>{item.name}</h3>
                <p>{item.overview}</p>
              </div>
            ))}
        <div className={styles.arrowHolder}>
          <IoIosArrowBack
            onClick={moveCarouselLeft}
            className={`${styles.ArrowBack} ${styles.same_css_forIcon}`}
          />
          <IoIosArrowForward
            onClick={moveCarouselRight}
            className={`${styles.ArrowForward} ${styles.same_css_forIcon}`}
          />
        </div>
      </section>
     </div>
     <section className={styles.categoryFilms}>
        <h1>Categories</h1>
        <div className={styles.pills}>
           <p onClick={allHandeler}  className={`${styles.pillstyle} ${styles.All} ${styles.active}`}>All</p>
           <p onClick={categoryHandeler} className={`${styles.pillstyle} ${styles.All}`}>Popular</p>
    </div>
    </section>  
     <div className={styles.cardcategory}>
      {popular.length>0 ? popular.map(item=><Category  data={item} key={item.id}/>  )
      
      : 
       showInfo.map(item=><Category  data={item} key={item.id} showDetails={showDetails} setShowDetails={setShowDetails}/>)
      }
                 
     </div>

    </>
  );
};

export default CardFillm;

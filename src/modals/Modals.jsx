import React, { useState } from 'react'
import styles from '../assets/styles/modal.module.css'
import { IoIosCloseCircle } from "react-icons/io";

const Modals = ({showInfo,selectmovie,showDetails,setShowDetails}) => {
     console.log(selectmovie);
     const closefunction=()=>{
      setShowDetails(false)
     }
  return (
    <div className={styles.modalHolder}>
      
      <IoIosCloseCircle onClick={closefunction} className={styles.closeIcon}/>
       <img className={styles.imageModal}
                  src={`https://image.tmdb.org/t/p/original/${selectmovie.poster_path}`}
                  alt=""
                />
      <p>{selectmovie.overview}</p>
    
      
    </div>
  )
}

export default Modals
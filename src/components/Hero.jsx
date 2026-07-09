import React, { useContext, useEffect, useState } from 'react'
import styles from '../assets/styles/hero.module.css'
import { LikeSend } from '../context/LikeContext';

const Hero = ({loading,children}) => {
  const getlike=useContext(LikeSend)
  const {like,setLike}=getlike
  const [lifting,setLifting]=useState(false);
      useEffect(()=>{
        loading ? setLifting(false) : setLifting(true)
      },[loading])
       
  return (
        <section className={`${styles.Hero} ${lifting ? styles.liftingText : ""}`}>
              <h1>Enjoy Movie & Shows in Stuning Quality </h1>
              <p>watch what matters</p>
              {children}
            </section>
    
    
  )
}

export default Hero
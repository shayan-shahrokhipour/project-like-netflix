import React, { useEffect, useState } from 'react'
import styles from '../assets/styles/hero.module.css'
const Hero = ({loading}) => {
  const [lifting,setLifting]=useState(false);
      useEffect(()=>{
        loading ? setLifting(false) : setLifting(true)
      },[loading])
       
  return (
    <section className={`${styles.Hero} ${lifting ? styles.liftingText : ""}`}>
       <h1>Enjoy movie & shows in stuning quality </h1>
       <p>watch what matters</p>
    </section>
  )
}

export default Hero
import React, { useEffect, useState } from 'react'
import styles from '../assets/styles/header.module.css'
import { FaHamburger } from "react-icons/fa";
import { LiaDoorClosedSolid } from "react-icons/lia";
import Hero from '../components/Hero';


const Header = ({children,loading}) => {
   const [letResponsive,setLetResponsive]=useState(false);
   const [animate,setAnimate]=useState(false);
  
   const hamburgerMenu =()=>{
       setLetResponsive(!letResponsive)
   }
  return (
  <>
   <header  className={styles.header}>

    <nav  className={styles.menu}>
                 <button onClick={hamburgerMenu} className={styles.hamburger}><FaHamburger /></button>

       <div className={`${styles.responsive} ${letResponsive ? styles.animation : ""}`}>
           <div className={styles.closeBtn}>
            <button onClick={hamburgerMenu}><LiaDoorClosedSolid className={styles.closeIcon} />
        </button>
           </div>
        {children}
      <input type="text"  placeholder='search quickly'/>
       </div>
         
    </nav>
   </header>
   
  </>
  )
}
export default Header
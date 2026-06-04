import React, { useEffect, useState } from 'react'
import styles from '../assets/styles/header.module.css'
import { FaHamburger } from "react-icons/fa";
import { LiaDoorClosedSolid } from "react-icons/lia";


const Header = ({children}) => {
   const [letResponsive,setLetResponsive]=useState(false);
   const hamburgerMenu =()=>{
       setLetResponsive(!letResponsive)
   }
  return (
   <header className={styles.header}>

    <nav className={styles.menu}>
                 <button onClick={hamburgerMenu} className={styles.hamburger}><FaHamburger /></button>

       <div className={letResponsive ? styles.animation : styles.responsive}>
           <div className={styles.closeBtn}>
            <button onClick={hamburgerMenu}><LiaDoorClosedSolid />
        </button>
           </div>
        {children}
      <input type="text"  placeholder='search quickly'/>
       </div>
         
    </nav>
   </header>
  )
}
export default Header
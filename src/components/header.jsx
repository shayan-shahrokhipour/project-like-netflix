import React, { useEffect, useState } from 'react'
import styles from '../assets/styles/header.module.css'
import { FaHamburger } from "react-icons/fa";
import { LiaDoorClosedSolid } from "react-icons/lia";
import Hero from '../components/Hero';
import { SearchBar } from './SearchBar';


const Header = ({children,loading,showInfo}) => {
   const [letResponsive,setLetResponsive]=useState(false);
   const [searchValue,setSearchValue]=useState("");
   const [showModal,setShowModal]=useState(false)  
       const searchHandeler =(event)=>{
          setSearchValue(event.target.value)
          
       } 

       const inputHandeler=()=>{
        setShowModal(!showModal)
        setLetResponsive(false)
        console.log(showModal);
        
       }
      
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
      <input type="text" id='searchInp' placeholder='search quickly'  value={searchValue} onChange={searchHandeler} onClick={inputHandeler}/>
       </div>
         
    </nav>
       {showModal ? <SearchBar setShowModal={setShowModal} showInfo={showInfo}/> : null}

   </header>
   
  </>
  )
}
export default Header
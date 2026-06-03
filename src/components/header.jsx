import React, { useEffect } from 'react'
import styles from '../assets/styles/header.module.css'
const Header = () => {
   
  return (
    <nav className={styles.topHeader}>
      <input className={styles.searchInp} type="text" placeholder='search quickly'/>
            
    </nav>
  )
}
export default Header
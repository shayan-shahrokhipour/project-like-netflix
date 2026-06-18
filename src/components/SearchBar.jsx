import React from 'react'
import styles from "../assets/styles/searchbox.module.css"
import { IoMdClose } from "react-icons/io";
export const SearchBar = ({showInfo,setShowModal}) => {
    console.log(showInfo);
    
    const closeSearch=()=>{
        setShowModal(false)
    }
  return (
   <>
    <section className={styles.modalHolder}>
      <IoMdClose onClick={closeSearch} className={styles.closeIcon}/>
      <ul className={styles.apiLists}>
       {showInfo.map(item=> (
        <li key={item.id}>
             <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
           <div className={styles.info}>
           <p>{item.name}</p>
           <p>{item.first_air_date}</p>

           </div>
        </li>
       ))}
       </ul>
    </section>
   </>
  )
}

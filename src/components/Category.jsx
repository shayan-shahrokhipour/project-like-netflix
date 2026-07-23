import React, { useContext, useState } from 'react'
import styles from '../assets/styles/category.module.css'
import { LikeSend } from '../context/LikeContext'

const Category = ({data,showDetails,setShowDetails}) => {
   const getselectedmovie = useContext(LikeSend)
   const {selectmovie,setSelectmovie,showM}=getselectedmovie
   return (
    <>
     <div className={styles.cardInfo}>
          <img 
         src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}alt=""/>  
         <p>{data.name}</p>
         <p>{data.first_air_date}</p>  
         <p>{data.popularity}</p> 
         <button onClick={()=>{showM(data)}}>Click It For  More</button>
    </div>
    </>
  )
}

export default Category
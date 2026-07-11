import React, { useContext } from 'react'
import { LikeSend } from '../context/LikeContext'
import styles from '../assets/styles/listlikeaside.module.css'
const ListLikeAside = ({setListLike,listLike,temp}) => {
    const getlike=useContext(LikeSend)
    const {like,setLike}=getlike
    console.log(like);
     console.log(listLike);
     
  return (
    <ul className={styles.listlikebox}>
     {listLike.map(item => 
      
         <li key={item.id}>
      <img  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
        <p> name : {item.name}</p>
          <p> first air date : {item.first_air_date}</p>

        </li>

       
      )}
    </ul>
  )
}

export default ListLikeAside
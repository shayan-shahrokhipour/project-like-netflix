import React, { useContext } from 'react'
import { LikeSend } from '../context/LikeContext'

const ListLikeAside = ({setListLike,listLike,temp}) => {
    const getlike=useContext(LikeSend)
    const {like,setLike}=getlike
    console.log(like);
     console.log(listLike);
     
  return (
    <ul>
     {listLike.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default ListLikeAside
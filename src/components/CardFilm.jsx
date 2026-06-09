import React from 'react'
import styles from "../assets/styles/cardfilm.module.css"
const CardFillm = ({showInfo}) => {
  console.log(showInfo);
  
  return (
    <section className={styles.cardsHolder}>
      {showInfo.map(item=> (<div key={item.id} className={styles.cards}>
          <img key={item.id} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
      </div>))}
    </section>
  )
}

export default CardFillm
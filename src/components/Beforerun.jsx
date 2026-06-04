import React, { useState } from 'react'
import styles from '../assets/styles/beforerun.module.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>
const Beforerun = ({setInfo,setValue,value}) => {
  
   const {name,family}=value

   const getValue=(e)=>{
     const na = e.target.name;
     const val = e.target.value;
     setValue(value=>({...value ,[na] : val}))
   }
   const addHandeler=()=>{
    console.log(name,family);
      if(name && family){
        setInfo(true)
      }
   }
  return (
    <section className={styles.login}>
        <h3>add your information</h3>
     <input type="text" name='name' value={name}  onChange={getValue} placeholder='name'/>
     <input type="text"name='family' value={family} onChange={getValue} placeholder='family'/>
      <button onClick={addHandeler}>Sign In</button>
          
    </section>
  )
}

export default Beforerun
import React, { useState } from 'react'
import styles from '../assets/styles/beforerun.module.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
</style>
const Beforerun = () => {
   const [value , setValue]=useState({
    name:'',
    family:''
   })
   const {name,family}=value

   const getValue=(e)=>{
     const na = e.target.name;
     const val = e.target.value;
     setValue(value=>({...value ,[na] : val}))
   }
  return (
    <section className={styles.login}>
        <h3>add your information</h3>
     <input type="text" name='name' value={name}  onChange={getValue} placeholder='name'/>
     <input type="text"name='family' value={family} onChange={getValue} placeholder='family'/>
      <button>Sign In</button>

    </section>
  )
}

export default Beforerun
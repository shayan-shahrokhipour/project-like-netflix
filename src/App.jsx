import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Beforerun from './components/Beforerun';
import styles from './assets/styles/header.module.css'
function App() {
   const [info,setInfo]=useState(false)
    const [value , setValue]=useState({
    name:'',
    family:''
   })
 useEffect(()=>{
        const options =  {headers: {accept: 'application/json'}};

        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=5c6ea490a269cfcefee83b4aefce6551',options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
    },[])
  return (
    <>
    {info==true 
    
    ? 
     <Header>
      <div className={styles.infoHolder}>
         <p>{value.name}</p>
       <p>{value.family}</p>
      </div>
    </Header>
      :
       <Beforerun setInfo={setInfo} value={value} setValue={setValue}/>}
    </>
  )
}

export default App

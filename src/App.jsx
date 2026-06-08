import { useEffect, useReducer, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Beforerun from './components/Beforerun';
import styles from './assets/styles/header.module.css'
import Herostyles from './assets/styles/hero.module.css'
import { CircleLoader } from 'react-spinners';


function App() {
   const [info,setInfo]=useState(false)
   const [showInfo,setShowinfo]=useState([])
   const [loading ,setLoading]=useState(false)
   const [response,setResponse]=useState(false)
   const [value , setValue]=useState({
    name:'',
    family:''
   })

      
   
     useEffect(()=>{
     if(response){
      async function data(){
     const options =  {headers: {accept: 'application/json'}};
    const res =  await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=5c6ea490a269cfcefee83b4aefce6551',options)
    const json = await res.json()
    setShowinfo(json.results);
     setInfo(true)

    setLoading(false)
    console.log(json);
    
   } 
   
       data()
  }
   console.log(response);
   
    },[response])
    const getValue=(e)=>{
     const na = e.target.name;
     const val = e.target.value;
     setValue(value=>({...value ,[na] : val}))
   }
  
  return (
    <>
    
    {loading == true &&  <div className={styles.loadingHolder}>
      <CircleLoader size={100} />
          
      </div>}
    {info==true
    
    ? 
    <>
     <Header loading={loading}>
      <div className={styles.infoHolder}>
         <p>{value.name}</p>
       <p>{value.family}</p>
      </div>
    </Header>
        <Hero loading={loading}>
            {showInfo.map(item=>(<div key={item.id} className={Herostyles.sliderHolder}><img key={item.id} className={Herostyles.sliderImg} src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}></img></div>))}
        </Hero>      
    </>

      :
       <Beforerun  value={value} setValue={setValue} setResponse={setResponse} setLoading={setLoading}/>
        
        }

    </>
  )
}

export default App

import { useEffect, useReducer, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Beforerun from './components/Beforerun';
import styles from './assets/styles/header.module.css'
import Herostyles from './assets/styles/hero.module.css'
import { CircleLoader } from 'react-spinners';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

//start a carousel
const initial = 0
const reducer=(state,action)=>{
if(action.type=="plus"){
       return(state + 1) 
}else if(action.type=="minus" ){  
             return(state - 1) 
}

}
function App() {
  //for carousel
  const[slider,dispatch]=useReducer(reducer,initial)
  //=>carousel
   const [info,setInfo]=useState(false)
   const [showInfo,setShowinfo]=useState([])
   const [loading ,setLoading]=useState(false)
   const [response,setResponse]=useState(false)
   const [value , setValue]=useState({
    name:'',
    family:''
   })
      //dispatch functions
      const carouselLeft=()=>{
       if(slider < showInfo.length - 1){
         dispatch({type :"plus",
          startagain:showInfo[initial]}
         )
       }
      }

      const carouselright=()=>{
       if(slider>0){
         dispatch({type:"minus"})
       }
      }
   //end of dispatch functions
   //get Data 
     useEffect(()=>{
     if(response){
      async function data(){
     const options =  {headers: {accept: 'application/json'}};
    const res =  await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=5c6ea490a269cfcefee83b4aefce6551',options)
    const json = await res.json()
    setShowinfo(json.results);
       //login
     setInfo(true)
   //turn off loading
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
           <div className={Herostyles.slider}>
             <div className={Herostyles.sliderHolder}><img  className={Herostyles.sliderImg} src={`https://image.tmdb.org/t/p/original${showInfo[slider].backdrop_path}`}></img>

            </div>
            <CiCircleChevLeft className={`${Herostyles.icons} ${Herostyles.leftIcon}`} onClick={carouselLeft}/>
            <CiCircleChevRight className={`${Herostyles.icons} ${Herostyles.rightIcon}`} onClick={carouselright} />

           </div>

        </Hero>      
    </>

      :
       <Beforerun  value={value} setValue={setValue} setResponse={setResponse} setLoading={setLoading}/>
        
        }

    </>
  )
}

export default App

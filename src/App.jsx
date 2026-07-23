import { useEffect, useReducer, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero';
import Beforerun from './components/Beforerun';
import CardFillm from './components/CardFilm';
import styles from './assets/styles/header.module.css'
import Herostyles from './assets/styles/hero.module.css'
import { CircleLoader } from 'react-spinners';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { LikeSend } from './context/LikeContext';
import ListLikeAside from './components/ListLikeAside';
import Modals from './modals/modals';
import Footer from './components/Footer';
//start a carousel
const initial = {
  index:0,
  direction:""
}
const reducer=(state,action)=>{
if(action.type=="plus"){
       return{index:state.index + 1,direction:"right"} 
}else if(action.type=="minus" ){  
             return {index:state.index - 1}
}else if(action.type=="reset"){
  return {index :state.index = 0,direction:"left"}
}else if(action.type=="backtoend"){
  return{index:state.index=action.value}
}

}
 
function App() {
  //for carousel
  const[slider,dispatch]=useReducer(reducer,initial)
  //=>carousel
   const [like ,setLike]=useState({})
    const [listLike,setListLike]=useState([])
    const [showDetails , setShowDetails]=useState(false)
   const [info,setInfo]=useState(false)
   const [showInfo,setShowinfo]=useState([])
   const [loading ,setLoading]=useState(false)
   const [response,setResponse]=useState(false)
   const [value , setValue]=useState({
    name:'',
    family:''
   })
        const [selectmovie,setSelectmovie]=useState([]);

 //selectMovie
     
   const showM=(movie)=>{
     setShowDetails(!showDetails)
     setSelectmovie(movie)
    
     
   }     

  
 
   
      //dispatch functions
      const carouselLeft=()=>{
       if(slider.index < showInfo.length - 1){
         dispatch({type :"plus"}
         )
       }else{
        dispatch({type:"reset"})
       }
      }

      const carouselright=()=>{
       if(slider.index>0){
         dispatch({type:"minus"})
       }else{
        dispatch({type:"backtoend",value:showInfo.length-1})
       }
      }
   //end of dispatch functions
   //get Data 
     useEffect(()=>{
     if(response && showInfo.length===0){
      async function data(){
     const options =  {headers: {accept: 'application/json'}};
    const res =  await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=5c6ea490a269cfcefee83b4aefce6551',options)
    const json = await res.json()
    setShowinfo(json.results);
       //login
     setInfo(true)
   //turn off loading
    setLoading(false)
    
   } 
   
       data()
  }
   
    },[response])
    const getValue=(e)=>{
     const na = e.target.name;
     const val = e.target.value;
     setValue(value=>({...value ,[na] : val}))
   }
   const iconHandeler = (item) => {
    setLike((like) => ({ ...like, [item.id]: !like[item.id] }));
   const exist = listLike.some(movie=> movie.id === item.id)
       if(!exist){
              setListLike(listLike=>[...listLike,item])

       }else{
           setListLike(listLike=>listLike.filter(mov=> mov.id != item.id)) 
            
       }
      
     
    
      
      
     console.log(listLike);     
  };
  return (
    <>
      <LikeSend value={{like,setLike,selectmovie,setSelectmovie,showM}}>
         {loading == true &&  <div className={styles.loadingHolder}>
      <CircleLoader size={100} />
          
      </div>}
    {info==true
    
    ? 
    <>
      
     <Header loading={loading} showInfo={showInfo}>
      <div className={styles.infoHolder}>
         <p>{value.name}</p>
       <p>{value.family}</p>
      </div>
    </Header>
        <Hero loading={loading}>
           <div className={Object.values(like).some(item=> item ===true) ?Herostyles.useflex : null}>
              <div className={Object.values(like).some(item=> item ===true) ? Herostyles.active :Herostyles.slider}>
             <div className={Herostyles.sliderHolder}>
             <img  key={showInfo[slider.index].id}
              className={`${Herostyles.sliderImg} ${slider.direction==="right" ? Herostyles.rightAnimation : Herostyles.leftAnimation }`} src={`https://image.tmdb.org/t/p/original${showInfo[slider.index].backdrop_path}`}></img>
            </div>
            <CiCircleChevLeft className={`${Herostyles.icons} ${Herostyles.leftIcon} `} onClick={carouselLeft}/>
            <CiCircleChevRight className={`${Herostyles.icons} ${Herostyles.rightIcon} ${Object.values(like).some(item=> item ===true) ? Herostyles.iconActive : null}`} onClick={carouselright} />
           </div>
            { Object.values(like).some(item=> item ===true) ?<div className={Herostyles.asideHolder}>
               <ListLikeAside setListLike={setListLike} listLike={listLike} /> 
            </div>
            : null
            }
           </div>
              
           
         </Hero>
     
            
        <CardFillm showDetails={showDetails} setShowDetails={setShowDetails} showInfo={showInfo} iconHandeler={iconHandeler}/> 
    {showDetails ? <Modals showInfo={showInfo} selectmovie={selectmovie} showDetails={showDetails} setShowDetails={setShowDetails}/>
        :
        null
        }
        <Footer/>
    </>

      :
       <Beforerun  value={value} setValue={setValue} setResponse={setResponse} setLoading={setLoading}/>
        
        }

      </LikeSend>
      {showDetails && <div className={styles.overlay}></div>
}
    </>
  )
}

export default App

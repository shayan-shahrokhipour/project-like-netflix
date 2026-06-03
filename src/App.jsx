import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'

function App() {
 useEffect(()=>{
        const options =  {headers: {accept: 'application/json'}};

        fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=5c6ea490a269cfcefee83b4aefce6551',options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
    },[])
  return (
    <>
      <Header/>
    </>
  )
}

export default App

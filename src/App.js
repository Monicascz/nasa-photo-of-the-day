import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants/index' 
import NasaTitle from './NasaTitle'
function App() {
 const [state, setState] = useState('')
 

useEffect(()=>{
  axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then((res)=>{
      console.log(res.data)
    setState(res.data)
  })
    .catch((err)=>{console.log(err,"Oh bother")})
},[])

  return (
    <div className="App">
        <NasaTitle state={state}/>
      
    </div>
  );
}

export default App;

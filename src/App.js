import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from './constants/index' 
import NasaTitle from './NasaTitle'
import styled from 'styled-components'
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
    <Background className="App">
        <NasaTitle state={state}/>
      
    </Background>
  );
}

export default App;

const Background = styled.div`
background-color:red;`
import React from 'react'
import NasaPhoto from './NasaPhoto'
import styled from 'styled-components'
export default function NasaTitle(props) {
    const { state } = props

    return (
        <Background>
            <h1>{state.title}</h1>
            <NasaPhoto state={state}/>        
        </Background>
    )
}

const Background= styled.div`
    background-color: gray;`
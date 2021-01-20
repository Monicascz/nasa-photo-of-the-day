import React from 'react'
import NasaPhoto from './NasaPhoto'
export default function NasaTitle(props) {
    const { state } = props

    return (
        <div>
            <h1>{state.title}</h1>
            <NasaPhoto state={state}/>        
        </div>
    )
}

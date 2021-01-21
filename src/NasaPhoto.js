import React from 'react'
import Date from './NasaDate'
import Explanation from './Explanation'
export default function NasaPhoto(props) {
    const { state } = props
    return (
        <div>
            <img src={state.url} alt={state.title}/>
            <Date date={state.date}/>
            <Explanation explan={state.explanation}/>
        </div>
    )
}

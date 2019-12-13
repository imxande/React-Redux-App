import React from 'react'

const NasaCard = props => {
    return (
        <div>
            <h2> {props.number} </h2>
            <p>Air Temp: {props.airTemp}</p>
            <p>Wind Speed: {props.windSpeed} </p>
            <p>Pressure: {props.pressure} </p>
            <p>Season: {props.season} </p>
        </div>
    )
}

export default NasaCard
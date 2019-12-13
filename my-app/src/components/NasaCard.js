import React from 'react'

const NasaCard = props => {
    return (
        <div>
            <img src={props.image}/>
            <h2> {props.name} </h2>
            <p>Species: {props.species}</p>
            {/* <p>Location: {props.location} </p> */}
            <p>Status: {props.status} </p>
            {/* <p>Origin: {props.origin} </p> */}
        </div>
    )
}

export default NasaCard
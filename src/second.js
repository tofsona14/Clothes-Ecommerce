import React from 'react'


const Los = (props) => {
    return(
        <div className='looa'>
            <h1>{props.title}</h1>
            <h1>{`your id is ${props.id}`}</h1>
            <h1>{props.amount}</h1>
            <h1>{props.date}</h1>
        </div>
    )
}

export default Los;
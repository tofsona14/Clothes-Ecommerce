import React from 'react';
import Card from './card';
import Los from './second';
import NewExpense from './first';
const Moa = (props) => {
console.log(props.items)
    return(
        <div>
            {props.items.map(x => <Los 
            id = {x.id}
            key = {x.id}
            title = {x.title} 
            amount = {x.amount} 
            date = {x.date} />)}
        
        </div>
    )
}

export default Moa;

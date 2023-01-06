import React ,{useState}from "react";
import Moa from "./app2";
import NewExpense from "./first";

function Sola(){
    const SOLARIUM = 
     [
        {
            id: 15,
            title: 'Graf Monte Cristo',
            amount: "2",
            date: "1932/10/02"
        }
    ]
    const [array, setArray] = useState(SOLARIUM) 
    const addNewExpense = (prop) => {
        setArray((prevExpenses) => {
            return [
                ...prevExpenses, prop
            ]
        })
    }
        return(
        <div>
            <NewExpense onSaveInfo = {addNewExpense}/>
            <Moa items = {array} />
        </div>
    )
     
}

export default Sola;
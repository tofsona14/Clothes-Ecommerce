import React, {useState} from 'react'

function Test() {
    const [date, setDate] = useState("")
    const Soa = (arg) => {
        setDate(arg.target.value)
        console.log(new Date(arg.target.value))
        const Soma = new Date(date)
        console.log(Soma.getMonth)
    } 
    return(
        <div>
            <input type="date" onChange={Soa}></input>
        </div>
    )
}

export default Test
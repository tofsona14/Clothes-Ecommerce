import React, {useState} from 'react'
import './first.css'

const NewExpense = (props) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [id, setId] = useState("")

  const idChangeHandler = (value) => {
    setId(value.target.value)
  }

  const titleChangeHandler = (value) => {
    setTitle(value.target.value)
  }
  const amountChangeHandler = (value) => {
    setAmount(value.target.value)
  }
  const dateChangeHandler = (value) => {
    setDate(value.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const Input = {
      title: title,
      amount: amount,
      date: `${new Date(date)}`,
      id: id
    }
    
    props.onSaveInfo(Input)
    setTitle("")
    setAmount("")
    setDate("")
    setId("")
  
  }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expsnes__controls'>
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} value={title} ></input>
                    </div>
                    <div className='new--expense__control'>
                        <label >Amount</label>
                        <input onChange={amountChangeHandler} value={amount} type='password'  min="0.01" step="0.01"></input>
                    </div>
                    <div>
                        <label >Date</label>
                        <input onChange={dateChangeHandler} value={date} type="date" min="01/01/2019" max="01/01/2023"></input>
                    </div>
                    <div>
                      <label>Id</label>
                      <input onChange={idChangeHandler} value={id} type="number" ></input>
                    </div>
                </div>
                <div>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense
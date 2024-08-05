import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../Context/GlobalContext';
import Button from '../Button/Button';
import { plus } from '../../Utils/icons';


const ExpenseForm = () => {

    const {addExpense,getExpenses} = useGlobalContext();
    const [inputState,setInputState] = useState(
        {
            "title":"",
            "amount":"",
            "date":"",
            "category":"",
            "description":"",
        }
    )

    const { title, amount, date, category,description } = inputState;

    const handleInput = name => e =>{
        setInputState({...inputState,[name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addExpense(inputState);
        getExpenses();
        setInputState({
            "title":"",
            "amount":"",
            "date":"",
            "category":"",
            "description":"",
        });
    }


  return (
    <div>
        <div className=" input-control">
            <input className='' type="text" name="title" placeholder='Expense Title' value={title} onChange={handleInput("title")}  />
        </div>

        <div className="input-control">
            <input type="text" name="amount" value={amount} placeholder='Expense Amount' onChange={handleInput("amount")} />
        </div>

        <div className="input-control"> 
            <DatePicker 
            id="date" placeholderText='Enter a date'
            selected={date} dateFormat="dd/mm/yyyy" onChange={(date)=>{
                setInputState({...inputState,date:date})
            }}/>
        </div>

        <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
        </div>

        <div className="input-control">
            <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
        </div>
        <div className="submit-btn">
        <Button 
            name={'Add Expense'}
            icon={plus}
            bPad={'.8rem 1.6rem'}
            bRad={'30px'}
            bg={'#1f2937'}
            color={'#fff'}
            onClick={handleSubmit}
        />
        </div>
    </div>
  )
}

export default ExpenseForm
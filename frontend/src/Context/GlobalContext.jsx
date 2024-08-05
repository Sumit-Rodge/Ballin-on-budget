import axios from "axios";
import React, { useContext, useState } from "react";

const GlobalContext = React.createContext();

export const GlobalProvider = (({children})=>{

    const [incomes,setIncomes] = useState([]);
    const [expenses,setExpenses] = useState([]);
    const [error,setError] = useState(null);

    const BASE_URL = "http://localhost:4005/api/v1/"

    //Income related functions
    const addIncome = async (income)=>{
        const response =  axios.post(`${BASE_URL}add-income`,income)
        .then(()=>getIncomes())
        .catch(error =>{
            setError(error.response.data.message)
        })
    }

    const getIncomes = async (income)=>{
        const response =  axios.get(`${BASE_URL}get-incomes`)
        .then((data)=>{
            setIncomes(data.data)
        })
        .catch(error =>{
            setError(error.response.data.message)
        })
    }

    const deleteIncome = async (id)=>{
        const response = axios.delete(`${BASE_URL}delete-income/${id}`)
        .then(()=>getIncomes())
        .catch(error =>{
            setError(error.response.date.message)
        })
    }

    const totalIncome = () =>{
        let total = 0
        incomes.map((income)=>{
            total += Number(income.amount);
        })
        return total;
    }

    //expense related funntions
    const addExpense = async (income)=>{
        const response =  axios.post(`${BASE_URL}add-expense`,income)
        .then(()=>getExpenses())
        .catch(error =>{
            setError(error.response.data.message)
        })
    }

    const getExpenses = async (income)=>{
        const response =  axios.get(`${BASE_URL}get-expenses`)
        .then((data)=>{
            setExpenses(data.data)
        })
        .catch(error =>{
            setError(error.response.data.message)
        })
    }

    const deleteExpense = async (id)=>{
        const response = axios.delete(`${BASE_URL}delete-expense/${id}`)
        .then(()=>getExpenses())
        .catch(error =>{
            setError(error.response.date.message)
        })
    }

    const totalExpense = () =>{
        let total = 0
        expenses.map((expense)=>{
            total += Number(expense.amount);
        })
        return total;
    }

    return (
        <GlobalContext.Provider value={
            {
                addIncome,
                getIncomes,
                incomes,
                deleteIncome,
                totalIncome,
                addExpense,
                getExpenses,
                expenses,
                deleteExpense,
                totalExpense
            }
        }>
            {children}
        </GlobalContext.Provider> 
    )
})

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
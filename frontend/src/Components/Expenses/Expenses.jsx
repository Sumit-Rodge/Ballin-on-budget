import React, { useEffect } from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

export const Expenses = () => {

  const { addExpense,expenses, getExpenses,deleteExpense,totalExpense } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, [])
  return (
    <div className='inner-layout'>
      <h1 className=''>Expense</h1>
      <h2 className="total-income">Total Expense : <span>${totalExpense()}</span></h2>
      <div className="income-content flex w-full gap-8">
        <div className="form-container"><ExpenseForm /></div>
        <div className="incomes flex flex-col flex-1">
          {expenses.map((expense) => {
            const { _id, title, amount, date, category, description, type } = expense;
            return <IncomeItem
              key={_id}
              id={_id}
              title={title}
              description={description}
              amount={amount}
              date={date}
              type={type}
              category={category}
              indicatorColor="#42AD00"
              deleteItem={deleteExpense}
            />
          })}
        </div>
      </div>
    </div>
  )
}

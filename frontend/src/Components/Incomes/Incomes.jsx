import React, { useEffect } from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'
import Form from '../From/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

export const Incomes = () => {

  const { addIncome, incomes, getIncomes,deleteIncome,totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, [])
  return (
    <div className='inner-layout'>
      <h1 className=''>Incomes</h1>
      <h2 className="total-income">Total Income : <span>${totalIncome()}</span></h2>
      <div className="income-content flex w-full gap-8">
        <div className="form-container"><Form /></div>
        <div className="incomes flex flex-col flex-1">
          {incomes.map((income) => {
            const { _id, title, amount, date, category, description, type } = income;
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
              deleteItem={deleteIncome}
            />
          })}
        </div>
      </div>
    </div>
  )
}

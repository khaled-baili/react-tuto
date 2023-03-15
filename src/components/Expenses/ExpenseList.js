import React from 'react';
import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";
function ExpenseList(props) {
    const filteredExpenses = props.filteredExpense
    if (filteredExpenses.length > 0)
           return (
               <ul className="expenses-list">
                   {
                       filteredExpenses.map(expense => (
                           <ExpenseItem
                               key={expense.id}
                               title={expense.title}
                               date={expense.date}
                               amount={expense.amount}
                           />
                       ))
                   }
               </ul>
           )
    return <div className='expenses-list__fallback'>No Expenses</div>
}

export default ExpenseList;

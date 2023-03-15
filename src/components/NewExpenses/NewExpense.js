import React, {useState} from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData)=> {
        const expenseData = {
            id:Math.random().toString(),
            ...enteredExpenseData

        }
        props.onAddExpense(expenseData);
    }
    const enableEditing = () => {
        setIsEditing(true);
    }
    const disableEditing = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && ( <button onClick={enableEditing}>Add New Expense</button>)}
            {isEditing && ( <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEditing={disableEditing}/>)}
        </div>
    );
}

export default NewExpense;

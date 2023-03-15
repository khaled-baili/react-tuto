import React, {useState} from 'react';
import './ExpenseForm.css'
function ExpenseForm(props) {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [enteredInput, setEnteredInput] = useState({
        title: '',
        amount: '',
        date: ''
    });
    const titleChangeHandler = (event) => {
        setEnteredInput({
            ...enteredInput,
            title:event.target.value
        });
    }
    const amountChangeHandler = (event) => {
        setEnteredInput({
            ...enteredInput,
            amount:event.target.value
        });
    }
    const dateChangeHandler = (event) => {
        setEnteredInput({
            ...enteredInput,
            date:event.target.value
        });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredInput.title,
            amount: enteredInput.amount,
            date: new Date(enteredInput.date)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredInput({
            amount: '',
            date: '',
            title: '',
        })
    };
    const cancelEditing = () => {
        props.onCancelEditing();
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredInput.title} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredInput.amount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredInput.date} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={cancelEditing}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
);
}

export default ExpenseForm;

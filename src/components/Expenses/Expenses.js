import React, {useState} from 'react';
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
    const [yearSelected, setYearSelected] = useState('');
    const chooseDate = (year)=>{
        setYearSelected(year);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === yearSelected
    })
    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter onChooseDate={chooseDate}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList filteredExpense={filteredExpenses} />
        </Card>
        </div>
    );
}

export default Expenses;

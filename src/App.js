import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import {useState} from "react";
const initial_expenses = [
    {
        id:'e1',
        title: 'Toilet Paper',
        amount:94.12,
        date: new Date(2020,7,14)
    },
    {
        id:'e2',
        title: 'Car Insurance',
        amount:290.67,
        date: new Date(2021,2,26)
    },
    {
        id:'e3',
        title: 'New Desk (Wooden)',
        amount:450,
        date: new Date(2021,5,10)
    },
    {
        id:'e4',
        title: 'New Tv',
        amount:799.68,
        date: new Date(2022,7,26)
    }
]
function App() {
    const [expenses, setExpenses] = useState(initial_expenses);
    const addExpenseHandler = (expense) => {
        setExpenses((prevState)=> {
            return [expense, ...prevState]
        });
    }
  return (
    <div>
      <h2>Let's get started!</h2>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;

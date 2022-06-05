import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense (props){
    const [initState,setState] = useState(false)
    const showFromExpenseForm = (data) => {
        const expenseData = {
            ...data,
            id : Math.random().toString()
        };
        props.fromNewExpense(expenseData)
        setState(false);
    }
    const startEditingHandler = () => {        
        setState(true);
    }

    const onCancel = () => {        
        setState(false);
    }
    return <div className="new-expense">
        {!initState && <button onClick={startEditingHandler}>Add new expenses</button>}
        {initState && <ExpenseForm fromExpenseForm = {showFromExpenseForm} cancel = {onCancel}></ExpenseForm>}
    </div>
}

export default NewExpense;
// import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./DisplayList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [initialYear, setYear] = useState("2020");
  const showFromExpensesFilter = (data) => {
    setYear(data);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === initialYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          initialValue={initialYear}
          fromExpensesFilter={showFromExpensesFilter}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList filteredExpenses = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;

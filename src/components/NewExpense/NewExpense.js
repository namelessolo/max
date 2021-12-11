import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => setIsClicked(true);
  const addExpenseHandler = () => setIsClicked(false);

  return (
    <div className="new-expense">
      {!isClicked && <button onClick={clickHandler}>Add new expense</button>}
      {isClicked && <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} onAddExpense={addExpenseHandler} />}
    </div>
  );
};

export default NewExpense;

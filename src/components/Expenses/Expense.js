import React from "react";
import { expenses } from "../../data/data";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

const Expense = () => {
  return (
    <Card className="expense">
      {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
};

export default Expense;

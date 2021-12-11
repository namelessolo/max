import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpansesList from "./ExpansesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ data }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = data.filter((data) => data.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expense">
      <ExpensesFilter onChangeFilter={filteredChangeHandler} selected={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpansesList data={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

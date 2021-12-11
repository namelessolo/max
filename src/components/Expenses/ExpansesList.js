import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpansesList.css";

const ExpansesList = ({ data }) => {
  return (
    <ul className="expenses-list">
      {data.length < 1 ? (
        <h2 className="expenses-list__fallback">No data found</h2>
      ) : (
        data.map(({ id, title, amount, date }) => <ExpenseItem key={id} title={title} amount={amount} date={date} />)
      )}
    </ul>
  );
};

export default ExpansesList;

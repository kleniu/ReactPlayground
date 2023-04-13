import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import CardWrapper from "../Commons/CardWrapper";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterData] = useState("2023");

  const filterChangeHandler = (filter) => {
    setFilterData(filter);
  };

  const filteredExpenses = props.expenses.filter((element) => {
    return element.date.getFullYear().toString() === filterYear;
  });

  return (
    <CardWrapper className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selectedFilter={filterYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <li>
        <ExpensesList items={filteredExpenses} />
      </li>
    </CardWrapper>
  );
};

export default Expenses;

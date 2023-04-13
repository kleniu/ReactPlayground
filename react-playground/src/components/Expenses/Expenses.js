import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import CardWrapper from "../Commons/CardWrapper";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterData] = useState("2023");

  const filterChangeHandler = (filter) => {
    setFilterData(filter);
    //console.log(filter);
  };

  const filteredExpenses = props.expenses.filter( (element) => {
    return element.date.getFullYear().toString() === filterYear; 
  } )

  return (
    <CardWrapper className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selectedFilter={filterYear}
      />
      {
        /* map returns the array -> React automatically renders array of JSX objects */
        filteredExpenses.map((element) => {
          return (
            <ExpenseItem 
                key={element.id}
                title={element.title}
                amount={element.amount}
                date={element.date}
            />
          );
        })
      }
    </CardWrapper>
  );
};

export default Expenses;

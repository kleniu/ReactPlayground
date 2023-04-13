import ExpanseDate from './ExpenseDate';
import CardWrapper from '../Commons/CardWrapper';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;


  return (
    <CardWrapper className="expense-item">
      <ExpanseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </CardWrapper>
  );
}

export default ExpenseItem;

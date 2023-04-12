import ExpenseForm from './ExpenseForm';
import './InputExpense.css';

const InputExpense = (props) => {
    const expenseFormSubmitHandler = (submitedData) => {
        const expenseData = {
            ...submitedData,
            id: `e${Math.random().toString().split('.')[1]}`
        }
        // pass data to parent
        props.onNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
           <ExpenseForm onExpenseFormSubmit={expenseFormSubmitHandler}/> 
        </div>
    );
}

export default InputExpense;
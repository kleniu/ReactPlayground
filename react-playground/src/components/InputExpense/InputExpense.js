import ExpenseForm from './ExpenseForm';
import './InputExpense.css';

const InputExpense = () => {
    const expenseFormSubmitHandler = (submitedData) => {
        const expenseData = {
            ...submitedData,
            id: `e${Math.random().toString().split('.')[1]}`
        }
        console.log(expenseData);
    }

    return (
        <div className="new-expense">
           <ExpenseForm onExpenseFormSubmit={expenseFormSubmitHandler}/> 
        </div>
    );
}

export default InputExpense;
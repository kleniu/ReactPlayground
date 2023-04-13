import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './InputExpense.css';

const InputExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const expenseFormSubmitHandler = (submittedData) => {
        const expenseData = {
            ...submittedData,
            id: `e${Math.random().toString().split('.')[1]}`
        }
        // pass data to parent
        props.onNewExpense(expenseData);
        setIsFormVisible(false);
    }

    const showFormHandler = () => {
        setIsFormVisible(true);
    }

    const cancelFormHandler = () => {
        setIsFormVisible(false);
    }

    return (
        <div className="new-expense">
           {!isFormVisible && <button onClick={showFormHandler}>Add New Expense</button>}
           {isFormVisible && <ExpenseForm onExpenseFormSubmit={expenseFormSubmitHandler} onCancel={cancelFormHandler}/>} 
        </div>
    );
}

export default InputExpense;
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import CardWrapper from '../Commons/CardWrapper';
import {useState} from 'react';
import './Expenses.css';

const Expenses = (props) => {
    const [filterData, setFilterData] = useState('2023');

    const filterChangeHandler = (filter) => {
        setFilterData(filter);
        //console.log(filter);
    }

    return (
        <CardWrapper className='expenses'>
            <ExpensesFilter onFilterChange={filterChangeHandler} selectedFilter={filterData}/>
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date} />
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date} />
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date} />
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date} />
        </CardWrapper>
    );
}

export default Expenses;
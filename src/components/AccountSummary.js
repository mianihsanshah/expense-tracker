import React, {useContext} from 'react'

//import teh Global State
import {GlobalContext} from '../context/GlobalState';
export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);

    const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

    const income = transactionAmounts
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        ).toFixed(2);

    return (
        <div className="account-summary-container-4">
            <div>
                <h4>Income</h4>
                <p className='money-plus-1'>
                    {income}
                </p>
            </div>
            <div>
                <h4>Expenses</h4>                
                <p className='money-minus-1'>
                    {expense}
                </p>
            </div>                 
            
        </div>
    )
}


// Note:
// Now we 2 CSS Classes for AccountSummary component
// these are;

// // account-summary-container-1
// // account-summary-container-2


// We have also two types of color coded for income & expneses colors
// such as 
// money-plus-1, money-plus-2 and
// money-minus-1 and money-minus-2

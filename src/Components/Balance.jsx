import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    const { transactions } = useContext(GlobalContext);

    // Calculate total balance
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="balance-container">
            <h1>DAILY BUDGET</h1>
            <h4 className="balance-title">Your Balance</h4>
            <h1 className="balance-amount">{total} ৳</h1>
        </div>
    );
}

export default Balance;

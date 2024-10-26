import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
import './global.css';

function TransactionList() {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <div className="transaction-list-container">
            <h3 className="transaction-list-title">Transaction History</h3>
            <ul className="transaction-list">
                {
                    transactions.map(transaction => (
                        <Transaction transaction={transaction} key={transaction.id} />
                    ))
                }
            </ul>
        </div>
    );
}

export default TransactionList;

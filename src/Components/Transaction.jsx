import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function Transaction({transaction}) {

    const {deleteTransaction} = useContext(GlobalContext); 
    
    
    

    const sign = transaction.amount < 0 ? '-' : '+' ; 
    console.log(transaction.amount)
    console.log(transaction.text)
  return (
    <li className={`transaction-item ${transaction.amount > 0 ? 'income' : 'expense'}`}>
            <div className="transaction-details">
                <span className="transaction-text">{transaction.text}</span>
                <span className="transaction-amount">
                    {sign} {Math.abs(transaction.amount)}
                </span>
            </div>
            <button 
                className="delete-btn" 
                onClick={() => deleteTransaction(transaction.id)}
            >
                X
            </button>
        </li>
  )
}

export default Transaction

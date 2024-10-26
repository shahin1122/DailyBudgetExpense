import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './global.css';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  
  // Access addTransaction and transactions from GlobalContext
  const { addTransaction, transactions } = useContext(GlobalContext);

  // Load transactions from localStorage when the component mounts
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      // Directly update the state without causing re-renders or adding duplicates
      storedTransactions.forEach(transaction => {
        if (!transactions.some(t => t.id === transaction.id)) {
          addTransaction(transaction, false); // Use addTransaction with no localStorage save
        }
      });
    }
  }, []); // Empty dependency array ensures it runs only once when mounted

  // Save transactions to localStorage whenever a new transaction is added
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };

    addTransaction(newTransaction); // Now this will update localStorage automatically

    // Clear input fields after submission
    setText('');
    setAmount('');
  };

  return (
    <>
      <div className="add-container">
        <h3 className='h3-element'>Add New Transaction</h3>
        <form className='custom-form' onSubmit={onSubmit}>
          <div className="form-control form-child">
            <label className='form-label' htmlFor="text">Product: </label>
            <input className='form-input'
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Text..."
            />
          </div>
          <div className="form-control form-child">
            <label className='form-label' htmlFor="amount">
              Amount: <br />
              
            </label>
            <input
              className='form-input'
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount..."
            />
          </div>
          <button className="add-Transaction">Add Transaction</button>
        </form>
      </div>
    </>
  );
}

export default AddTransaction;

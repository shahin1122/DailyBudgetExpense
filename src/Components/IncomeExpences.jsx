import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './global.css';

function IncomeExpences() {
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className="income-expense-container">
      <div className="income-container">
        <h4 className="income-title">Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div className="expense-container">
        <h4 className="expense-title">Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpences;

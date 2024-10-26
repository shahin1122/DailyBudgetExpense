import AddTransaction from "./Components/AddTransction";
import Balance from "./Components/Balance";
import IncomeExpences from "./Components/IncomeExpences";
import TransactionList from "./Components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import '../src/Components/global.css';


function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <div className="balance-section">
          <Balance />
        </div>
        <div className="income-expenses-section">
          <IncomeExpences />
        </div>
        <div className="add-transaction-section">
          <AddTransaction />
        </div>
         <div className="transaction-list-section">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

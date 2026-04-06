import { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import FinanceChart from './components/FinanceChart';
import CategoryStats from './components/CategoryStats';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = tx => setTransactions([tx, ...transactions]);
  const deleteTransaction = id => setTransactions(transactions.filter(tx => tx.id !== id));

  const totalIncome = transactions.filter(tx => tx.amount > 0).reduce((acc, tx) => acc + tx.amount, 0);
  const totalExpense = transactions.filter(tx => tx.amount < 0).reduce((acc, tx) => acc + Math.abs(tx.amount), 0);
  const totalSavings = totalIncome - totalExpense;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <div className="w-full max-w-2xl">
        <Header />
        <Balance transactions={transactions} />
        <div className="flex flex-col md:flex-row gap-4 mt-5">
          <IncomeExpenses transactions={transactions} />
          <div className="md:w-1/2 bg-white p-4 rounded shadow text-center">
            <h3 className="text-xl font-bold">Total Savings</h3>
            <p className="text-3xl mt-2">{totalSavings >= 0 ? `$${totalSavings}` : `-$${Math.abs(totalSavings)}`}</p>
          </div>
        </div>
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        <AddTransaction addTransaction={addTransaction} />
        <FinanceChart transactions={transactions} />
        <CategoryStats transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const FinanceChart = ({ transactions }) => {
  const incomeCategories = {};
  const expenseCategories = {};

  transactions.forEach(tx => {
    if (tx.amount > 0) {
      if (!incomeCategories[tx.category]) incomeCategories[tx.category] = 0;
      incomeCategories[tx.category] += tx.amount;
    } else {
      if (!expenseCategories[tx.category]) expenseCategories[tx.category] = 0;
      expenseCategories[tx.category] += Math.abs(tx.amount);
    }
  });

  const labels = Array.from(new Set([...Object.keys(incomeCategories), ...Object.keys(expenseCategories)]));

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: labels.map(label => incomeCategories[label] || 0),
        backgroundColor: '#34d399',
      },
      {
        label: 'Expense',
        data: labels.map(label => expenseCategories[label] || 0),
        backgroundColor: '#f87171',
      },
    ],
  };

  return (
    <div className="mt-5 bg-white p-4 rounded shadow">
      <h3 className="text-xl mb-2">Income vs Expense</h3>
      {transactions.length > 0 ? <Bar data={data} /> : <p className="text-gray-500">No transactions yet</p>}
    </div>
  );
};

export default FinanceChart;
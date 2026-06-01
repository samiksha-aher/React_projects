const IncomeExpenses = ({ transactions }) => {
  const income = transactions
    .filter(tx => tx.amount > 0)
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expense = transactions
    .filter(tx => tx.amount < 0)
    .reduce((acc, tx) => acc + Math.abs(tx.amount), 0);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-5">
      {/* Income Card */}
      <div className="flex-1 bg-white p-4 rounded shadow text-center">
        <h4 className="text-gray-500">Income</h4>
        <p className="text-green-500 text-2xl font-bold">${income}</p>
      </div>

      {/* Expense Card */}
      <div className="flex-1 bg-white p-4 rounded shadow text-center">
        <h4 className="text-gray-500">Expense</h4>
        <p className="text-red-500 text-2xl font-bold">${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
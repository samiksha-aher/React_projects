const CategoryStats = ({ transactions }) => {
  const totalExpense = transactions
    .filter(tx => tx.amount < 0)
    .reduce((acc, tx) => acc + Math.abs(tx.amount), 0);

  const expenseByCategory = {};

  transactions.forEach(tx => {
    if (tx.amount < 0) {
      if (!expenseByCategory[tx.category]) expenseByCategory[tx.category] = 0;
      expenseByCategory[tx.category] += Math.abs(tx.amount);
    }
  });

  const categories = Object.keys(expenseByCategory);
  if (categories.length === 0) return null;

  return (
    <div className="mt-5 bg-white p-4 rounded shadow">
      <h3 className="text-xl mb-2">Expenses by Category</h3>
      {categories.map(cat => {
        const percent = ((expenseByCategory[cat] / totalExpense) * 100).toFixed(1);
        return (
          <div key={cat} className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span>{cat}</span>
              <span>{percent}% (${expenseByCategory[cat]})</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded">
              <div
                className="bg-red-500 h-3 rounded"
                style={{ width: `${percent}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryStats;
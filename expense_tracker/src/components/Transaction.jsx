import { categories } from './categories';

const getIcon = (type, categoryName) => {
  const cat = categories[type].find(c => c.name === categoryName);
  return cat ? cat.icon : null;
};

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const icon = getIcon(transaction.type, transaction.category);

  return (
    <li className={`flex justify-between items-center p-2 border-r-4 ${transaction.amount < 0 ? 'border-red-500' : 'border-green-500'} mb-2 bg-white rounded shadow`}>
      <div className="flex items-center gap-2">
        {icon && <img src={icon} alt={transaction.category} className="w-6"/>}
        <span>{transaction.text}</span>
      </div>
      <span>
        {sign}${Math.abs(transaction.amount)}
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="ml-2 text-red-500 hover:text-red-700"
        >
          x
        </button>
      </span>
    </li>
  );
};

export default Transaction;
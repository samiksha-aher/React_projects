import { useState } from 'react';
import { categories } from './categories';

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Expense');
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text || !amount || !category) return;
    addTransaction({
      id: Math.floor(Math.random() * 100000),
      text,
      amount: type === 'Expense' ? -Math.abs(amount) : Math.abs(amount),
      type,
      category
    });
    setText('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="mt-5">
      <h3 className="text-xl border-b pb-2 mb-2">Add New Transaction</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={type}
          onChange={(e) => { setType(e.target.value); setCategory(''); }}
          className="border p-2 rounded"
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Category</option>
          {categories[type].map(cat => (
            <option key={cat.name} value={cat.name}>{cat.name}</option>
          ))}
        </select>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
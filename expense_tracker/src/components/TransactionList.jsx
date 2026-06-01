import Transaction from './Transaction';

const TransactionList = ({ transactions, deleteTransaction }) => (
  <div className="mt-5">
    <h3 className="text-xl border-b pb-2 mb-2">History</h3>
    <ul>
      {transactions.map(tx => (
        <Transaction key={tx.id} transaction={tx} deleteTransaction={deleteTransaction} />
      ))}
    </ul>
  </div>
);
export default TransactionList;
const Balance = ({ transactions }) => {
  const total = transactions.reduce((acc, tx) => acc + tx.amount, 0);
  return (
    <div className="text-center mt-5">
      <h4 className="text-xl">Your Balance</h4>
      <h1 className="text-4xl font-bold">${total}</h1>
    </div>
  );
};
export default Balance;
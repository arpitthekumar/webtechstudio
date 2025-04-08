import React from "react";

const Transactions = () => {
  const transactions = [
    { name: "John Doe", status: "pending", date: "14.02.2023", amount: "$3,200" },
    { name: "John Doe", status: "done", date: "14.02.2023", amount: "$3,200" },
    { name: "John Doe", status: "cancelled", date: "14.02.2023", amount: "$3,200" },
    { name: "John Doe", status: "pending", date: "14.02.2023", amount: "$3,200" },
    { name: "John Doe", status: "done", date: "14.02.2023", amount: "$3,200" },
  ];

  const statusClasses = {
    pending: "badge-warning",
    done: "badge-success",
    cancelled: "badge-error",
  };

  return (
    <div className="card bg-base-200 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Latest Transactions</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (
            <tr key={index}>
              <td>{txn.name}</td>
              <td>
                <span className={`badge ${statusClasses[txn.status]}`}>
                  {txn.status}
                </span>
              </td>
              <td>{txn.date}</td>
              <td>{txn.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

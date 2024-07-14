import React from 'react';
import { Line } from 'react-chartjs-2';

const TransactionGraph = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <div>No transactions data available.</div>;
  }
  console.log(transactions);
  const data = {
    labels: transactions.map(t => t.date),
    datasets: [{
      label: 'Transaction Amount',
      data: transactions.map(t => t.amount),
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: false
    }]
  };

  return <Line data={data} />;
};

export default TransactionGraph;

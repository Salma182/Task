import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

const TransactionGraph = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <div>No transactions data available.</div>;
  }

  // Extracting dates and amounts from transactions
  const dates = transactions.map(t => new Date(t.date)); // Convert to Date objects if necessary
  const amounts = transactions.map(t => t.amount);

  const data = {
    labels: dates,
    datasets: [{
      label: 'Transaction Amount',
      data: amounts,
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: false
    }]
  };

  const options = {
    scales: {
      x: {
        type: 'time', // Use time scale for x-axis
        time: {
          unit: 'day' // Adjust the time unit as per your data granularity
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount'
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `Amount: ${context.raw}`
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default TransactionGraph;

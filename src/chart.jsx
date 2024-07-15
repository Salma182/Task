
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./App.css";
import Data from "./data.json";
import { useParams } from "react-router";

defaults.responsive = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black"; 


const TransactionChart = () => {

const {id} = useParams()

const filteredTransactions = Data.transactions.filter(
    transaction => transaction.customer_id === parseInt(id)
  );
  const amounts = filteredTransactions.map(transaction => transaction.amount);


    const uniqueDates = Array.from(new Set(Data.transactions.map(data => data.date)));

    // Format dates as "MM-DD-YYYY"
    const formattedDates = uniqueDates.map(date => {
      const [year, month, day] = date.split('-');
      return `${month}-${day}-${year}`;
    });

  return (
    <div className="App container">
      <div className="dataCard revenueCard">

        <Line
          data={{
            labels: formattedDates,
            datasets: [
              {
                label: "Total Amount",
                data: amounts,
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>

    </div>
  );
};

export default TransactionChart
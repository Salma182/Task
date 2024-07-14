import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TransactionGraph from './chart';

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch customers
    axios.get('https://salma.github.io/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));

    // Fetch transactions
    axios.get('https://salma.github.io/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  const getCustomerTransactions = (customerId) => {
    return transactions.filter(transaction => transaction.id === customerId);
  };
  console.log(getCustomerTransactions(2))

const customerss= customers.map(customer => customer.name)
  console.log(customerss)

  return <> 
     <div className='container'>
      <h1>Customer Transactions</h1>
      {/* Render customer data here */}
      <table className="table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Transaction Date</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {customers?.map(customer => (
              <tr>
                <td>{customer?.name}</td>
                <td>{getCustomerTransactions(customer.id)?.map(transaction => transaction.date)}</td>
                <td>{getCustomerTransactions(customer.id)?.map(transaction => transaction.amount)}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>

<TransactionGraph transactions={transactions} />
  </>
   
}

export default App;

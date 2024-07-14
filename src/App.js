import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import TransactionGraph from './chart';
import jsonData from './data.json';

function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const { customers, transactions } = jsonData;
    setCustomers(customers);
    setTransactions(transactions);
  }, []);

  const getCustomerTransactions = (customerId) => {
    return transactions.filter(transaction => transaction.id === customerId);
  };
  console.log(getCustomerTransactions(2))

const customerss= customers.map(customer => customer.name)
  console.log(transactions)

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getCustomerTransactions(customer.id).some(transaction =>
      transaction.amount.toString().includes(searchTerm)
  )

);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return <> 
     <div className='container'>
      <h1>Customer Transactions</h1>

      <input
        type="text"
        placeholder="Search by customer name or transaction amount"
        value={searchTerm}
        onChange={handleSearchChange}
        className='Searchbar'
      />

      {/* Render customer data here */}
      <table className="table">
        <thead>
          <tr>
          <th>id</th>
            <th>Customer Name</th>
            {/* <th>Transaction Date</th> */}
            <th>Transaction Amount</th>
            <th>Number of Transactions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers?.map(customer => (
              <tr>
                <td>{customer?.id}</td>
                <td>{customer?.name}</td>
                {/* <td>{getCustomerTransactions(customer.id)?.map(transaction => transaction.date)}</td> */}
                <td>{getCustomerTransactions(customer.id)?.map(transaction => transaction.amount)}</td>
                <td>{getCustomerTransactions(customer.id)?.map(transaction => transaction.customer_id)}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>

{/* <TransactionGraph transactions={transactions} /> */}
  </>
   
}

export default App;

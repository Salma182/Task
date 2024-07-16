import { useEffect, useState } from 'react';
import TransactionGraph from './chart';
import jsonData from './data.json';
import Search from  './assets/search.svg'
import { Navigate, useNavigate } from 'react-router';


const Customers = () =>{

    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate =useNavigate()

    useEffect(() => {
      const { customers, transactions } = jsonData;
      setCustomers(customers);
      setTransactions(transactions);
    }, []);
    
    const getCustomerTransactions = (customerId) => {
      return transactions.filter(transaction => transaction.id === customerId);
    };

    const handleCustomerClick = (id)=>{
        navigate("customer/" + id)
    }
    

   const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getCustomerTransactions(customer.id).some(transaction =>
      transaction.amount.toString().includes(searchTerm)
  )

);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
  
    const getCustomerTransactionCount = (customerId) => transactions.filter(transaction => transaction.customer_id === customerId).length;
  
    // const transactionCounts = transactions.reduce((counts, transaction) => {
    //     const { customer_id } = transaction;
    //     counts[customer_id] = (counts[customer_id] || 0) + 1;
    //     return counts;
    //   }, {});

    return <>     
    <div className="dashboard-content">
    
        <div className="main-content">
      
          <div className="customers-list">
            <h3 className='title'>Customers List</h3>

        <div className='Searchbar'>
        <input 
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className='search'
        />
        <img className='searchicon' src={Search} alt='' />
        </div>
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Transaction amount</th>
                  <th>Number of Transactions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td className='Names' onClick={() => handleCustomerClick(customer.id)}>{customer.name}</td>
                    <td>{getCustomerTransactions(customer.id)?.map(transaction => transaction.amount)}</td>
                    <td>{getCustomerTransactionCount(customer.id)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
</div>
</div>
    </>
} 

export default Customers;
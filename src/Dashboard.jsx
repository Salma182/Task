// import { useEffect, useState } from 'react';
// import TransactionGraph from './chart';
// import jsonData from './data.json';
// import Search from  './assets/search.svg'
// import coin from './assets/coin.svg';
// import user from './assets/user.svg';
// import money from './assets/money.svg';

// const Dashboard = () =>{

//     const [customers, setCustomers] = useState([]);
//     const [transactions, setTransactions] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
    
//     useEffect(() => {
//       const { customers, transactions } = jsonData;
//       setCustomers(customers);
//       setTransactions(transactions);
//     }, []);
    
//     const getCustomerTransactions = (customerId) => {
//       return transactions.filter(transaction => transaction.id === customerId);
//     };
//     // console.log(getCustomerTransactions(2))
    
//     const customerss= customers.map(customer => customer.name)
//     // console.log(transactions)
    
//     const filteredCustomers = customers.filter(customer =>
//       customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       getCustomerTransactions(customer.id).some(transaction =>
//         transaction.amount.toString().includes(searchTerm)
//     )
//     );
//     const handleSearchChange = (event) => {
//       setSearchTerm(event.target.value);
//     };

//     const getTotalTransactions = () => transactions.length;

//     const getTotalAmount = () => transactions.reduce((total, transaction) => total + transaction.amount, 0);
  
//     const getCustomerTransactionCount = (customerId) => transactions.filter(transaction => transaction.customer_id === customerId).length;
  
//     return <>     
//     <div className="dashboard-content">
//     <h3 className='title'>Dashboard</h3>

//         <div className="header">

//           <div className="stat-box">
//           <img src={user} alt='' />
//             <p>Customers Total</p>
//             <h2>{customers.length}</h2>
//           </div>
//           <div className="stat-box">
//             <img src={money} alt='' />
//             <p>Transaction Total</p>
//             <h2>{getTotalTransactions()}</h2>
//           </div>
//           <div className="stat-box">
//           <img src={coin} alt='' />
//             <p>Amount Total</p>
//             <h2>${getTotalAmount().toLocaleString()}</h2>
//           </div>
//         </div>
//         <div className="main-content">
//           <div className="customers-list">
//           <h3 className='title'>Customers List</h3>
//           <table className="table">
//               <thead>
//                 <tr>
//                   <th>id</th>
//                   <th>Name</th>
//                   <th>Transaction amount</th>
//                   <th>Number of Transactions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {customers.map(customer => (
//                   <tr key={customer.id}>
//                     <td>{customer.id}</td>
//                     <td>{customer.name}</td>
//                     <td>
//                       {transactions
//                         .filter(transaction => transaction.customer_id === customer.id)
//                         .reduce((total, transaction) => total + transaction.amount, 0)}
//                     </td>
//                     <td>{getCustomerTransactionCount(customer.id)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
// </div>
// </div>
//     </>
// } 

// export default Dashboard;
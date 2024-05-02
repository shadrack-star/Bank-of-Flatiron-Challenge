import React, { useEffect, useState } from "react";



function Transaction() {
  const [transactions, setTransactions] = useState([])
  
  useEffect(() => {
    const fetchTransactions = async ()=>{
      const result = await fetch("http://localhost:8001/transactions")
      const resultJson = await result.json();
  
      setTransactions(resultJson)
    }

    fetchTransactions();
  },[])

  
  return (
    transactions.map(transaction =>
      <tr key={transaction.id}>
          <td>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
      </tr>
    )
  )}

export default Transaction;
import React from "react";
import { useState } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("")
  const [id, setId] = useState("")

  function handleSubmit(){
    const newTransaction = {id,date, description, category, amount};

    fetch ("http://localhost:8001/transactions",{
          method:'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(newTransaction) 
        } ).then(() => {
          console.log("it's working")
        })
  }
  
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields" key={setId}>
          <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)}/>
          <input type="text" name="description" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
          <input type="text" name="category" placeholder="Category" value={category} onChange={(event) => setCategory(event.target.value)}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={(event) => setAmount(event.target.value)}/>
        </div>
        <button className="ui button" type="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
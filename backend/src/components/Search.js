
import React, { useState, useEffect } from "react";

function Search() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      const result = await fetch("http://localhost:8001/transactions");
      const resultJson = await result.json();
      setTransactions(resultJson);
    };
    fetchTransactions();
  }, []);

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={onChangeHandler}
        value={searchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
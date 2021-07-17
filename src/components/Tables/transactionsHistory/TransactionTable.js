import React from "react";
import "./transaction.css";

import SearchBar from "../../searchBar/SearchBar";

export default function TransactionTable() {
  return (
    <div className="transaction-table-wrap">
      <div className="table-top">
        <h4 id="title">Transaction History</h4>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

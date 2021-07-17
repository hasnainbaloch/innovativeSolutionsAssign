import React from "react";
import "./transaction.css";
import DataTable, { createTheme } from 'react-data-table-component';
import data from './data.json';

import SearchBar from "../../searchBar/SearchBar";

createTheme('solarized', {
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
  },
  background: {
    default: '#343c63',
  },
  context: {
    background: '#558BED',
    text: '#FFFFFF',
  },
  divider: {
    default: 'rgba(135, 143, 188, 0.2);',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: '#558BED',
    disabled: 'rgba(0,0,0,.12)',
  },
});

export default function TransactionTable() {
  const columns = [
    {
      name: "Date",
      selector: "date",
      sortable: true,
    },
    {
      name: "Time",
      selector: "time",
      sortable: true,
    },
    {
      name: "Transaction ID",
      selector: "trnsID",
      sortable: true,
    },
    {
      name: "Value",
      selector: "value",
    },
    {
      name: "Type",
      selector: "type",
    },
  ];

  return (
    <div className="transaction-table-wrap">
      <div className="table-top">
        <h4 id="title">Transaction History</h4>
        <div>
          <SearchBar />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        theme={"solarized"}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 20]}
        paginationComponentOptions={{
          rowsPerPageText: "Records per page:",
          rangeSeparatorText: "out of",
        }}
      />
    </div>
  );
}

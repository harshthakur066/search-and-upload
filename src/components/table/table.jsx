import React, { useState } from "react";

// import axios from "axios";
import { Table } from "semantic-ui-react";

import "./table.css";

const TableOutput = ({ result }) => {
  console.log("result", Object.keys(result).length);

  const tabledata = Object.keys(result).map((item, index) => {
    console.log("item", item);
    return (
      <Table.Body key={index}>
        <Table.Row>
          <Table.Cell>{item}</Table.Cell>
          <Table.Cell>{result[item]}</Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  });

  return (
    <div className="table">
      {result.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No data</h2>
      ) : (
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Keys</Table.HeaderCell>
              <Table.HeaderCell>Values</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {tabledata}
        </Table>
      )}
    </div>
  );
};

export default TableOutput;

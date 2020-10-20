import React, { useState } from "react";

// import axios from "axios";
import { Table } from "semantic-ui-react";

const TableOutput = ({ result }) => {
  console.log("result", result);

  const display = () => {
    console.log("display");
    Object.keys(result).map((key, index) => {
      console.log("keys", key);
      return (
        <Table.Body>
          <Table.Row>
            <Table.Cell>{key}</Table.Cell>
            <Table.Cell>{key}</Table.Cell>
          </Table.Row>
        </Table.Body>
      );
    });
  };

  return (
    <div>
      {Object.keys(result).length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No data</h2>
      ) : (
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Header 1</Table.HeaderCell>
              <Table.HeaderCell>Header 2</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {display()}
        </Table>
      )}
    </div>
  );
};

export default TableOutput;

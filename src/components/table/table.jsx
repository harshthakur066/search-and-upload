import React, { useState } from "react";

// import axios from "axios";
import { Table } from "semantic-ui-react";

const TableOutput = ({ result }) => {
  console.log("result", result.length);

  const display = () => {
    console.log("display");
    result.map((item) => {
      console.log("keys", item);
      return (
        // <Table.Body>
        //   <Table.Row>
        //     <Table.Cell>{item.AUDOOH}</Table.Cell>
        //     <Table.Cell>{item.AUDIOM}</Table.Cell>
        //     <Table.Cell>{item.USDAB}</Table.Cell>
        //     <Table.Cell>{item.JPYSN}</Table.Cell>
        //   </Table.Row>
        // </Table.Body>
        <h1>Hello Nooboon</h1>
      );
    });
  };

  return (
    <div>
      {result.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No data</h2>
      ) : (
        // <Table celled selectable>
        //   <Table.Header>
        //     <Table.Row>
        //       <Table.HeaderCell>AUDOOH</Table.HeaderCell>
        //       <Table.HeaderCell>AUDIOM</Table.HeaderCell>
        //       <Table.HeaderCell>USDAB</Table.HeaderCell>
        //       <Table.HeaderCell>JPYSN</Table.HeaderCell>
        //     </Table.Row>
        //   </Table.Header>
        // </Table>
        <div>
          <h1>Hello Harsh</h1>
          {display()}
        </div>
      )}
      {/* {display()} */}
    </div>
  );
};

export default TableOutput;

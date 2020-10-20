import React, { useState } from "react";
import axios from "axios";
// import { Search, Grid, Header, Segment } from "semantic-ui-react";
import TableOutput from "../table/table";

import "./search.css";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({});

  const searchFile = async () => {
    try {
      const res = await axios.post("search/key", input);
      setResult(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="box">
        <form onSubmit={searchFile}>
          <input
            type="text"
            className="textbox"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            title="Search"
            value="&#128269;"
            type="submit"
            className="button"
          />
        </form>
      </div>
      <div>
        <TableOutput result={result} />
      </div>
    </div>
  );
};

export default SearchBox;

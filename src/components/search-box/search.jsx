import React, { useState } from "react";
import axios from "axios";
// import { Search, Grid, Header, Segment } from "semantic-ui-react";
import TableOutput from "../table/table";

import "./search.css";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({});

  const searchBox = async () => {
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
        <form onSubmit={searchBox}>
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
      <div style={{ marginTop: "2rem" }}>
        {Object.keys(result).length === 0 ? (
          <h2 className="error">Search it!</h2>
        ) : (
          <div className="output">
            <div style={{ marginRight: "10px" }}>
              <h2>{Object.keys(result)}</h2>
            </div>
            <div>
              <h2>:</h2>
            </div>
            <div style={{ marginLeft: "1rem" }}>
              <h2>{Object.values(result)}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;

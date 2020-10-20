import React, { useState } from "react";
import axios from "axios";
// import { Search, Grid, Header, Segment } from "semantic-ui-react";

import "./search.css";

const SearchBox = () => {
  const [input, setInput] = useState("");

  const searchFile = () => {
    try {
      axios.post("search/key", input);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div class="box">
      <form onSubmit={searchFile}>
        <input
          type="text"
          class="textbox"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input title="Search" value="&#128269;" type="submit" class="button" />
      </form>
    </div>
  );
};

export default SearchBox;

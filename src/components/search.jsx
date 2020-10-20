import React, { useState, useEffect } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";
import "./search.css";

const SearchBox = () => {
  //   const [state, setstate] = useState("")
  return <div>
    <form method="post">
      <input type="text" class="textbox" placeholder="Search" />
      <input title="Search" value="" type="submit" class="button" />
    </form>
  </div>
};

export default SearchBox;

import React from "react";
import "./App.css";
import Search from "./components/search-box/search";
import axios from "axios";
import Upload from "./components/upload/upload";

axios.defaults.baseURL = ""; // Backend hosted url

const App = () => {
  return (
    <div className="App">
      <Search />
      <Upload />
    </div>
  );
};

export default App;

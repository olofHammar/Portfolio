import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="appContainer" id="appContainerId">
       <Home />
      </div>
    </div>
  );
}

export default App;

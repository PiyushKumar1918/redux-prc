import React from "react";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainers from "./containers/HeaderContainers";

function App() {
  return (
    <div className="App">
      <HeaderContainers />

      <HomeContainer />
    </div>
  );
}

export default App;

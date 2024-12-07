import React from "react";
import "./assets/App.css";
import SideBar from "./SideBar";
import Information from "./Information";
const App: React.FC = () => {
  return (
    <div className="container">
      <SideBar />
      <Information />
    </div>
  );
};

export default App;

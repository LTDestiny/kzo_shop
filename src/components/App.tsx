import React from "react";
import "./assets/App.css";
import SideBar from "./SideBar";
import Information from "./Information";
import Center from "./Center";
const App: React.FC = () => {
  return (
    <div className="container">
      <SideBar />
      <Information />
      <Center />
    </div>
  );
};

export default App;

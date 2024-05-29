import React from "react";
import ReactDOM from "react-dom/client";
import Calender from "./components/Calender";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Calender />
      <Sidebar />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

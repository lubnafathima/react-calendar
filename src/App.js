import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./components/Calendar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Calendar />
      <Sidebar />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

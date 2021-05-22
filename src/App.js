// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />

      <EmployeeList />
    </div>
  );
}

export default App;

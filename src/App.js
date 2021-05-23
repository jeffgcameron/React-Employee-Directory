// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import EmployeeList from "./components/EmployeeList/EmployeeList";
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

import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";

class EmployeeList extends Component {
  state = {
    search: "",
    results: [],
    sortOrder: "",
  };

  componentDidMount() {
    API.fetchEmployees()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  }

  employeeSearch = e => {
      if(e.target.name === "search") {
          const empSearch = e.target.value.toLowerCase();
          this.setState({
              search: empSearch
          })
      }
  }

  render() {
    return (
      <div>
        <SearchForm 
        employeeSearch={this.employeeSearch}
        search={this.state.search}
        />

        
          <table className="table table-responsive text-center table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            
            {this.state.results.map(employee => 
            employee.name.first.toLowerCase().includes(this.state.search) || 
            employee.name.last.toLowerCase().includes(this.state.search) ?
            <tbody key={employee.login.uuid}>
              <tr >
                <td>
                  <img alt="employee" src={employee.picture.thumbnail}></img>
                </td>
                <td>{employee.name.first}</td>
                <td>{employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
              </tr>
              </tbody>
              :
              null
            )}
            
          </table>
    
      </div>
    );
  }
}

export default EmployeeList;

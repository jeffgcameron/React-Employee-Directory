import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm/SearchForm";
import "./employee-list.css"

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

  sortFirst = () => {
      const sorted = this.state.results.sort((a, z) => {
          if(z.name.first > a.name.first) {
              return -1
          }
          if (a.name.first > z.name.first) {
              return +1
          }
          return 0
      })

      if(this.state.sortOrder === "decending") {
          sorted.reverse();
          this.setState({sortOrder:"ascending"})
      } else {
          this.setState({sortOrder: "decending"})
      }
      this.setState({results: sorted})
  }

  sortLast = () => {

    console.log("working baby");
    const sorted = this.state.results.sort((a, z) => {
        if(z.name.last > a.name.last) {
            return -1
        }
        if (a.name.last > z.name.last) {
            return +1
        }
        return 0
    })

    if(this.state.sortOrder === "decending") {
        sorted.reverse();
        this.setState({sortOrder:"ascending"})
    } else {
        this.setState({sortOrder: "decending"})
    }
    this.setState({results: sorted})
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
                <th>First Name <button onClick = {this.sortFirst} >^</button></th>
                <th>Last Name <button onClick={this.sortLast}>^</button></th>
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

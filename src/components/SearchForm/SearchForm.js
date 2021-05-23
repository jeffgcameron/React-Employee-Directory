import React from "react";
import "./search-form.css"

function SearchForm(props) {
    return (
        <div className="form-section">
        <form>
            <div className="form-group">
                <input
                    onChange={props.employeeSearch}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for an Employee"
                    id="search"
                />

            </div>
        </form>
        </div>
    );
}

export default SearchForm;
import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Search Employee</label>
        <input
          value={props.search}
          // onChange={props.handleInputChange}
          // firstName={props.results.first}
          // lastName={props.results.last}
          // list="breeds"
          type="input"
          className="form-control"
          placeholder="Type in employee name"
          // id="breed"
        />
        {/* <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

import React from "react";
import "./style.css";

function SearchResults(props) {
  console.log(props);
  return (
    <tbody className="list-group search-results">
      {props.results.map((result) => (
        <tr key={result} className="list-group-item">
          <td>
            <img
              alt="Person"
              src={result.picture.thumbnail}
              className="img-fluid"
            />
          </td>
          <td>
            <p>
              {result.name.first} {result.name.last}
            </p>
          </td>
          <td>
            <p>Email: {result.email}</p>
          </td>
          <td>
            <p>Age: {result.dob.age}</p>
          </td>
          <td>
            <p>Phone: {result.phone}</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default SearchResults;

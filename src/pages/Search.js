import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    API.displayEmployees()
      .then((res) => {
        console.log(res);
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.displayEmployees(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  sortNameBottom() {
    this.setState({
      results: this.state.results.sort((a, b) => {
        let nameA = a.name.first.toUpperCase();
        let nameB = b.name.first.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }),
    });
  }

  sortNameTop() {
    this.setState({
      results: this.state.results.sort((b, a) => {
        let nameA = a.name.first.toUpperCase();
        let nameB = b.name.first.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }),
    });
  }

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search For An Employee</h1>
          <th className="text-center scope=col">
            <button
              className="fa fa-caret-down p-2"
              onClick={() => this.sortNameBottom()}
            >Up</button>
            Name
            <button
              className="fa fa-caret-up p-2"
              onClick={() => this.sortNameTop()}
            >Down</button>
          </th>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;

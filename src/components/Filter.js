import React, { Component } from "react";

class Filter extends Component {
  state = {
    filter: null
  };

  handleSelect = event => {
    if (event.target.value === "none")
      this.setState({
        filter: null
      });
    else
      this.setState({
        filter: event.target.value
      });
    this.handleSort(event.target.value);
  };

  handleSort(filter) {
    if (filter === "name") {
      //name sort
      this.props.hogs.sort((a, b) => {
        let nameA = a.name;
        let nameB = b.name;

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.props.callbackFromParent(this.props.hogs);
    }
  }

  render() {
    return (
      <select onChange={this.handleSelect}>
        <option value="none" />
        <option value="name"> Name </option>
        <option value="weight"> Weight </option>
        <option value="greased"> Greased </option>
      </select>
    );
  }
}

export default Filter;

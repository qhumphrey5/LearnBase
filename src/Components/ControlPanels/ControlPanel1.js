import React, { Component } from 'react';
import { Panel, FormControl } from 'react-bootstrap';

export default class ControlPanel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      schools: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({ search: event.target.value }, this.fetchSchools);
  }

  async fetchSchools() {
    if (this.state.search.length > 2) { // Only search if the search string is 3 or more characters
      const resp = await fetch(`http://localhost:5000/schools/search/${this.state.search}`);
      const data = await resp.json();
      this.setState({ schools: data });
    } else {
      this.setState({ schools: [] });
    }
  }

  render() {
    return (
      <Panel header='Select School' bsStyle='warning'>
        <FormControl
          type="text"
          value={this.state.search}
          placeholder="Search for a school"
          onChange={this.handleSearchChange}
        />
        {this.state.schools.map(school => (
          <p key={school.id}>{school.name}</p> // Replace this with how you want to display the schools
        ))}
      </Panel>
    );
  }
}
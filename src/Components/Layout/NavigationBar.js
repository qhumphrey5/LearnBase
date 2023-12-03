import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import React from 'react';
import './Navbar.css'; // Import the CSS file

export default (props) => {
  return (
    <Navbar fluid default collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">
            <img src="/learnbase_logo.jpg" alt="LearnBase Logo" width="200" height="100" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem eventKey={1} className="custom-nav-item"><b>School Data</b></NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/SchoolComparison">
            <NavItem eventKey={2} className="custom-nav-item"><b>School Comparison</b></NavItem>
          </LinkContainer>
          <LinkContainer to="/CustomGroups">
            <NavItem eventKey={3} className="custom-nav-item"><b>Student Data & Custom Groups</b></NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};




import React from 'react';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class MainMenu extends React.Component {
  render() {
    return (
      <div>
        <Navbar id="main-menu">
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/">
                <span className="brand-title">React-Boilerplate</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              <LinkContainer to="overview">
                <NavItem eventKey={1}>OVERVIEW</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <section id="the-stack"></section>
      </div>
    );
  }
}

export default MainMenu;

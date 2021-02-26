/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import {
  Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './style.scss';

const NavMenu = ({ filter, setFiltering }) => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      <Navbar className="nav" bg="light" expand="lg">
        <FontAwesomeIcon
          className="shopping-cart-icon"
          icon={faShoppingCart}
          size="lg"
        />

        <Navbar.Brand href="#home">Mes courses en ligne</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-primary" variant="pills">
            <Link className="nav-link" to="/">Home</Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => {
                filter(e.target.value);
                setFiltering(e.target.value.length);
              }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Link className="nav-link" to="/cart">
          <div className="shopping-cart">
            <FontAwesomeIcon
              className="shopping-cart-icon"
              icon={faShoppingBag}
              size="2x"
            />
            {/* on affiche le badge cartCount si celui ci est supérieur à 0 */}
            {items.length > 0 && (
            <Badge className="shopping-cart-badge" pill variant="primary">
              {items.length}
            </Badge>
            )}
          </div>
        </Link>
      </Navbar>
    </div>
  );
};

export default NavMenu;

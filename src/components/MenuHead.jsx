import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
const MenuHead = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="text-uppercase navbar-dark link-light">
            <Nav.Link as={Link} to="/">
              {" "}
              Дом
            </Nav.Link>
            <Nav.Link as={Link} to="/newrec">
              Добавить запись
            </Nav.Link>
            <Nav.Link as={Link} to="/records">
              Все записи
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuHead;

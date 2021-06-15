import React from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = ({ handleCreateAcc }) => (
  <Navbar variant="dark" expand="lg">
    <Container className="d-flex justify-content-lg-evenly">
      <Navbar.Brand href="#home">
        <Link to='/' exact>
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Magbank logo"
          />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-lg-evenly">
        <Nav className="mr-auto">
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quem-somos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>

        <ButtonGroup aria-label="Basic example d-flex">
        <DropdownButton id="dropdown-basic-button" variant="outline-light" title="Acessar minha conta">
          <Dropdown.Item><Link to='/login' exact>Pessoa Física</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/login' exact>Pessoa Jurídica</Link></Dropdown.Item>

        </DropdownButton>
          <Button variant="outline-light" onClick={handleCreateAcc}>
            abra sua conta
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;

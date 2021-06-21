import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = ({ handleCreateAcc, logged, auth }) => {

  const history = useHistory;
  
  const handleClick = () => {
    auth.logout(() => history.push('/'));
  };

  return (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand>
        <Link to="/" exact>
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Magbank logo"
          />
        </Link>
      </Navbar.Brand>

      {logged && (
        <>
          <Form>
            <div className="navbar__search-group d-none d-lg-flex">
              <Form.Control type="text" placeholder="O que você procura?" />
              <Button variant="link">
                <FontAwesomeIcon icon={faSearch} color="#FFF" />
              </Button>
            </div>
          </Form>
          <Button variant="outline-light" onClick={handleClick}>Sair</Button>
        </>
      )}

      {!logged && (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav__margin">
              <Nav.Link href="#cartao" className="text-light">
                Cartão
              </Nav.Link>
              <Nav.Link href="#quem-somos" className="text-light">
                Quem Somos
              </Nav.Link>
              <Nav.Link href="#faq" className="text-light">
                FAQ
              </Nav.Link>
            </Nav>

            <ButtonGroup aria-label="Basic example" className="nav__margin">
              <DropdownButton
                id="dropdown-basic-button"
                variant="outline-light"
                title="Acessar minha conta"
              >
                <Dropdown.Item>
                  <Link to="/login">Pessoa Física</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/login">Pessoa Jurídica</Link>
                </Dropdown.Item>
              </DropdownButton>
                <Button variant="outline-light" onClick={handleCreateAcc}>
                  abra sua conta
                </Button>
            </ButtonGroup>
          </Navbar.Collapse>
        </>
      )}

    </Container>
  </Navbar>
)};

export default Navigation;

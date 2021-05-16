import React from "react";
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
import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = () => (
  <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Magbank logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#cartao">Cartão</Nav.Link>
          <Nav.Link href="#quem-somos">Quem Somos</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
          <DropdownButton
            variant="outline-light"
            as={ButtonGroup}
            title="acessar minha conta"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Dropdown.Item>
          </DropdownButton>
          <Button variant="outline-light">abra sua conta</Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;

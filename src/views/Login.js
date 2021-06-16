import React from "react";
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Button,
  Image
} from "react-bootstrap";
import logo from '../assets/logo.svg'

import './Login.scss';

const Login = () => (
    <section className='login'>
        <div className='login__container'>
            <Row>
                <Col className='text-center text-light'>
                    <Image src={logo} className='mb-5' />
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className='lead'><strong>Número da conta</strong></Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className='lead'><strong>Password</strong></Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Link to='/dashboard' exact>
                        <Button variant="success" type="submit" className='mt-3'>
                            Criar conta
                        </Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </div>
    </section>
);


export default Login;

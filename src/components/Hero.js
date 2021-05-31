import React from 'react';
import { 
    Button, 
    Image, 
    Row,
    Col,
    Jumbotron
} from 'react-bootstrap';
import logo from "../assets/logo__magic-pay--mobile.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import './Hero.scss';

const Hero = () => (
    <Jumbotron  className='text-center py-5 text-light hero'>
        <Row>
            <Col lg className="text-lg-end py-lg-5">
                <Image className='d-lg-none' src={logo} alt='Magbank logo Magic Pay'></Image>
                <Image className='d-none d-lg-inline-block' src={logoDesktop} alt='Magbank logo Magic Pay'></Image>
            </Col>
            <Col lg className="text-lg-start py-lg-5">
                <p>Pague suas contas pelo nosso APP</p>
                <Button variant="outline-light">Abra sua conta</Button>
            </Col>
        </Row>
    </Jumbotron>
);

export default Hero;

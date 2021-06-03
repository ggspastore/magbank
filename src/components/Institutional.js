import React from 'react';
import { 
    Row,
    Col,
    Container,
    Button
} from 'react-bootstrap';
import './Institutional.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
    fas, 
    faCreditCard, 
    faShoppingCart, 
    faMobile,
    faWallet
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, faCreditCard, faShoppingCart, faMobile, faWallet)

const Institutional = () => (
    <Container className='institutional-background'>
        <Row>
            <Col xs={12} lg={5} />
            <Col xs={12} lg={7} >
                <h2>Já nascemos digital</h2>
                <p> elit. Nam id ante est. Donec lobortis fringilla lacus, vitae fermentum ligula tristique a. Aliquam in sagittis metus, eget commodo libero. Vivamus pulvinar malesuada neque, ut pellentesque neque blandit sed. Vestibulum blandit dapibus neque et faucibus. Vestibulum a augue ut risus iaculis elementum. Donec laoreet, tellus eu consectetur hendrerit, mauris urna condimentum magna, et laoreet arcu mi sit amet felis. Pellentesque quis enim ac turpis tristique tincidunt. Phasellus tristique egestas nibh, quis viverra ipsum scelerisque id. Nunc semper massa vitae mattis pretium.</p>
                <Button variant='outline-light'>Abra sua conta</Button>
                <FontAwesomeIcon icon={faCreditCard} size='2x' />
            </Col> 
        </Row>
    </ Container>
)

export default Institutional;

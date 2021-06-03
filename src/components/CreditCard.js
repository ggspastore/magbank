import React from 'react';
import { 
    Row,
    Col,
    Image,
    Container
} from 'react-bootstrap';
import creditCardImage from "../assets/credit-card.jpg";
import './CreditCard.scss';
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


const CreditCard = () => (
        <Container>
            <Row className='py-5 my-5 justify-content-center'>
                <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
                    <Row>
                        <h2 className="my-5 credit-card-title" >Cartão de Crédito</h2>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6} className='mb-4'>
                            <Row>
                                <Col xs={2} className='d-flex justify-content-center'>
                                    <FontAwesomeIcon icon={faCreditCard} size='2x' color='#f05656' />
                                </Col>
                                <Col xs={10} className='h5 text-muted'>
                                    Crédito Pessoal
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={6} className='mb-4'>
                            <Row>
                                <Col xs={2} className='d-flex justify-content-center'>
                                    <FontAwesomeIcon icon={faMobile} size='2x' color='#f05656' />
                                
                                </Col>
                                <Col xs={10} className='h5 text-muted'>
                                    App
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={6} className='mb-4'>
                            <Row>
                                <Col xs={2} className='d-flex justify-content-center'>
                                    <FontAwesomeIcon icon={faShoppingCart} size='2x' color='#f05656' />
                                </Col>
                                <Col xs={10} className='h5 text-muted'>
                                    Pagamentos Online
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={6} className='mb-4'>
                            <Row>
                                <Col xs={2} className='d-flex justify-content-center'>
                                    <FontAwesomeIcon icon={faWallet} size='2x' color='#f05656' />
                                </Col>
                                <Col xs={10} className='h5 text-muted'>
                                    Carteira Digital
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={5} >
                    <Image src={creditCardImage} alt="Cartão de crédito MagBank" fluid />
                </Col>
            </Row>
        </Container>
        
);

export default CreditCard;

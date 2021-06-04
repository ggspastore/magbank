import React from 'react';
import { 
    Row,
    Col,
    Image,
    Container
} from 'react-bootstrap';
import './CreditCard.scss';
import IconText from './IconText';
import creditCardImage from "../assets/credit-card.jpg";
import { 
    faCreditCard, 
    faShoppingCart, 
    faMobile,
    faWallet
} from '@fortawesome/free-solid-svg-icons';


const CreditCard = () => (
        <Container>
            <Row className='py-5 my-5 justify-content-center'>
                <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
                    <Row>
                        <h2 className="my-5 credit-card-title" >Cartão de Crédito</h2>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6} className='mb-4'>
                            <IconText icon={faCreditCard} size={2} color='#f05656' textClass='h5 text-muted'>
                                Crédito Pessoal
                            </IconText>
                        </Col>
                        <Col xs={12} lg={6} className='mb-4'>
                            <IconText icon={faMobile} size={2} color='#f05656' textClass='h5 text-muted'>
                                App
                            </IconText>
                        </Col>
                        <Col xs={12} lg={6} className='mb-4'>
                            <IconText icon={faShoppingCart} size={2} color='#f05656' textClass='h5 text-muted'>
                                Pagamentos Online
                            </IconText>
                        </Col>
                        <Col xs={12} lg={6} className='mb-4'>
                            <IconText icon={faWallet} size={2} color='#f05656' textClass='h5 text-muted'>
                                Carteira Digital
                            </IconText>
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

import React from 'react';
import { 
    Row,
    Col,
    Container,
    Button
} from 'react-bootstrap';
import './Institutional.scss';
import IconText from './IconText';
import { 
    faMobile,
    faMobileAlt,
    faGlobe,
    faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const Institutional = () => (
    <section className='institutional-background text-light'>
        <Container className='py-5' >
            <Row>
                <Col xs={12} lg={5} />
                <Col xs={12} lg={7} >
                    <h2 className='display-5 mb-5'>Já nascemos digital</h2>
                    <p className='mb-5'> elit. Nam id ante est. Donec lobortis fringilla lacus, vitae fermentum ligula tristique a. Aliquam in sagittis metus, eget commodo libero. Vivamus pulvinar malesuada neque, ut pellentesque neque blandit sed. Vestibulum blandit dapibus neque et faucibus. Vestibulum a augue ut risus iaculis elementum. Donec laoreet, tellus eu consectetur hendrerit, mauris urna condimentum magna, et laoreet arcu mi sit amet felis. Pellentesque quis enim ac turpis tristique tincidunt. Phasellus tristique egestas nibh, quis viverra ipsum scelerisque id. Nunc semper massa vitae mattis pretium.</p>
                    <Col xs={12} lg={6} className='mb-4'>
                        <IconText icon={faMobileAlt} size={2} color={'#FFF'} textClass={'text-light mb-4'}>
                            Sem fila e sem burocracia
                        </IconText>
                        <IconText icon={faMobile} size={2} color={'#FFF'} textClass={'text-light mb-4'}>
                            Simples e prático
                        </IconText>
                        <IconText icon={faGlobe} size={2} color={'#FFF'} textClass={'text-light mb-4'}>
                            Abertura de conta 100% online
                        </IconText>
                        <IconText icon={faShieldAlt} size={2} color={'#FFF'} textClass={'text-light mb-4'}>
                            Transações mais seguras
                        </IconText>
                    </Col>
                    <Button variant='outline-light' className=''>Abra sua conta</Button>
                </Col> 
            </Row>
        </ Container>
    </ section>
)

export default Institutional;

import React from "react";
/*import { Link } from 'react-router-dom';*/
import {
    Container, 
    Row, 
    Col,
    Button,
    Tabs,
    Tab,
    Table
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = () => {
    const latest = [
        {date: '22/07', description: 'SAQUE 24H 88931', amount: '300,00'},
        {date: '21/07', description: 'SUPERMERCADO 87532', amount: '654,00'},
        {date: '20/07', description: 'ESTACIONAMENTO 23156', amount: '207,00'},
        {date: '16/07', description: 'NETFLIX 45662', amount: '44,00'}
    ];

    const future = [
        {date: '03/08', description: 'CONCESSIONÁRIA 33125', amount: '3000,00'},
        {date: '26/08', description: 'MARKETPLACE 56321', amount: '75,00'},
        {date: '05/09', description: 'INCÊNDIO 81748', amount: '22,00'},
        {date: '15/10', description: 'ELETRÔNICOS 21589', amount: '124,00'}
    ];

    return (
        <Container className='dashboard my-5'>
            <Row>
                <Col xs={12} lg={4}>
                    <Row>
                        <Col xs={3}>
                            <span className='dashboard__user-avatar mb-5'>
                                <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' className='dashboard__user-icon' />
                                <FontAwesomeIcon icon={faUser} size='3x' color='#7c7d7d' className='dashboard__user-icon' />
                            </span> 
                        </Col>
                        <Col xs={9}>
                            <h2>User's Name</h2>
                            <p className='text-muted'> ag: 1234 c/c: 4321-5 </p>
                        </Col>
                    </Row>
                    <Row xs={12} className='mx-xm-2 mx-0'>
                        <Button variant='link' size='lg' className='dashboard__button dashboard__button--active text-left d-block mb-1'>Minha Conta</Button>
                        <Button variant='link' size='lg' className='dashboard__button text-left d-block mb-1'>Pagamentos</Button>
                        <Button variant='link' size='lg' className='dashboard__button text-left d-block mb-1'>Extrato</Button>
                    </Row>
                </Col>
                <Col xs={12} lg={3} className='mt-lg-5'>
                    <h3 className='my-xs-5 my-lg-5'>Conta Corrente</h3>
                    <h6><small><strong>Saldo em conta corrente</strong></small></h6>
                    <h4 className='text-success mb-4'>
                        <small>R$ </small>3.500<small>,00</small>
                    </h4>
                    <h6><small><strong>Cheque especial</strong></small></h6>
                    <p className='mb-0 text-muted'><strong>Limite disponível</strong></p>
                    <p className='mb-4'>R$ 5.000,00</p>
                    <Button variant='secondary'>Ver extrato</Button>
                </Col>
                <Col xs={12} lg={5} className='mt-lg-5'>
                    <Tabs className='mt-5 pt-lg-5 dashboard__tabs' defaultActiveKey='latestTransactions'>
                        <Tab title='Últimos Lançamentos' eventKey='latestTransactions'>
                            <Table className='dashboard__table' striped hover>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Descrição</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {latest.map(({ date, description, amount }) => (
                                        <tr>
                                            <td>{date}</td>
                                            <td>{description}</td>
                                            <td>{amount}</td>
                                        </tr>
                                    ))}
                           
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab title='Lançamentos Futuros' eventKey='futureTransactions'>
                        <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Descrição</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {future.map(({ date, description, amount }) => (
                                        <tr>
                                            <td>{date}</td>
                                            <td>{description}</td>
                                            <td>{amount}</td>
                                        </tr>
                                    ))}
                           
                                </tbody>
                            </Table>  
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;

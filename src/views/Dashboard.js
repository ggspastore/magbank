import React, {useState} from "react";
import { 
    Switch, 
    Route, 
    Link 
} from 'react-router-dom';
import {
    Container, 
    Row, 
    Col,
    Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import AccountBalance from '../components/AccountBalance';
import AccountPayments from '../components/AccountPayments';
import AccountHistory from "../components/AccountHistory";

import './Dashboard.scss';


const Dashboard = () => {

    const [ activeLink, setActiveLink ] = useState(0);

    const links = [
        { text: 'Minha Conta', path: '/dashboard', exact: true },
        { text: 'Pagamentos', path: '/dashboard/payments' },
        { text: 'Extrato', path: '/dashboard/history' },
    ]

    const data = {
        latestBalance: [
            {date: '22/07', description: 'SAQUE 24H 88931', amount: '300,00'},
            {date: '21/07', description: 'SUPERMERCADO 87532', amount: '654,00'},
            {date: '20/07', description: 'ESTACIONAMENTO 23156', amount: '207,00'},
            {date: '16/07', description: 'NETFLIX 45662', amount: '44,00'}
        ],
            
        futureBalance: [
            {date: '03/08', description: 'CONCESSIONÁRIA 33125', amount: '3000,00'},
            {date: '26/08', description: 'MARKETPLACE 56321', amount: '75,00'},
            {date: '05/09', description: 'INCÊNDIO 81748', amount: '22,00'},
            {date: '15/10', description: 'ELETRÔNICOS 21589', amount: '124,00'}
        ],

        history: [
            {date: '21/07', description: 'SALDO DO DIA', amount: '', balance: 2576.00,},
            {date: '22/07', description: 'DEPÓSITO 24231', amount: +1000.00, balance: ''},
            {date: '22/07', description: 'SAQUE 24H 88931', amount: -300.00, balance: ''},
            {date: '21/07', description: 'SALDO DO DIA', amount: '', balance: 1851.00,},
            {date: '21/07', description: 'SUPERMERCADO 87532', amount: -654.00, balance: ''},
            {date: '20/07', description: 'SALDO DO DIA', amount: '', balance: 2318.00,},
            {date: '20/07', description: 'ESTACIONAMENTO 23156', amount: -207.00, balance: ''},
            {date: '16/07', description: 'SALDO DO DIA', amount: '', balance: 2780.00,},
            {date: '16/07', description: 'NETFLIX 45662', amount: -44.00, balance: ''}
        ],
    };  

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
                        {links.map(({text, path, exact}, key) => (
                            <Link to={path} exact={exact ? exact : false} key={key}>
                                <Button 
                                    variant='link' 
                                    size='lg' 
                                    className={`dashboard__button text-left d-block mb-1 ${key === activeLink ? 'dashboard__button--active' : ''}`} 
                                    block
                                    onClick={() => setActiveLink(key)}
                                >
                                    {text}
                                </Button>
                            </Link>
                        ))}
                    </Row>
                </Col>
                <Switch>
                    <Route path='/dashboard/history'>
                        <AccountHistory data={data} />
                    </Route>
                    <Route path='/dashboard/payments'>
                        <AccountPayments />       
                    </Route>
                    <Route path='/dashboard'>
                        <AccountBalance data={data} />
                    </Route>
                </Switch>
            </Row>
        </Container>
    );
}

export default Dashboard;

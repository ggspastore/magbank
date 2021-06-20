import React from "react";
import { 
    Col,
    Button,
    Tabs,
    Tab,
    Table
} from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../views/Dashboard.scss';

const AccountBalance = ({ data }) => {

    const { latestBalance, futureBalance } = data;

    return (
        <>
            <Col xs={12} lg={3} className='mt-lg-5'>
                <h3 className='my-xs-5 my-lg-5'>Conta Corrente</h3>
                <h6><small><strong>Saldo em conta corrente</strong></small></h6>
                <h4 className='text-success mb-4'>
                    <small>R$ </small>3.500<small>,00</small>
                </h4>
                <h6><small><strong>Cheque especial</strong></small></h6>
                <p className='mb-0 text-muted'><strong>Limite disponível</strong></p>
                <p className='mb-4'>R$ 5.000,00</p>
            {/*need to integrate this button with dashboard selectors */}
                <Link to='/dashboard/history'><Button variant='secondary'>Ver extrato</Button></Link>

            </Col>
            <Col xs={12} lg={5} className='mt-lg-5'>
                <Tabs className='mt-5 pt-lg-5 dashboard__tabs' defaultActiveKey='latestTransactions'>
                    <Tab title='Últimos Lançamentos' eventKey='latestTransactions'>
                        <Table className='dashboard__table' striped hover>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição (R$)</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestBalance.map(({ date, description, amount }) => (
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
                                {futureBalance.map(({ date, description, amount }) => (
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
        </>
    );}

export default AccountBalance;

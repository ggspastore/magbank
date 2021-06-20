import React from "react";
import { 
    Col,
    Table
} from "react-bootstrap";
/*import { Link } from 'react-router-dom';*/

import '../views/Dashboard.scss';

const AccountHistory = ({ data }) => {

    const { history } = data;

    return (
            <Col xs={12} lg={5} className='mt-lg-5'>
                <h3 className='mt-4'>Extrato de Conta Corrente</h3>
                    <Table className='dashboard__table' striped hover>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Valor (R$)</th>
                                <th>Saldo (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map(({ date, description, amount, balance }) => (
                                <tr>
                                    <td>{date}</td>
                                    <td>{description}</td>
                                    <td className={amount > 0 ? 'text-highlight-green' : 'text-highlight-red'}>{amount}</td>
                                    <td>{balance}</td>
                                </tr>
                            ))};
                        </tbody>
                </Table>
            </Col>
    );}

export default AccountHistory;

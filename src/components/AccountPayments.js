import React from "react";
import { 
    Col,
    Button,
    Tabs,
    Tab,
    Form,
    Row,
    InputGroup
} from "react-bootstrap";

import '../views/Dashboard.scss';

const AccountPayments = () => {


    return (
        <>
            <Col xs={12} lg={8} className='mt-lg-5'>
                <h3 className='pt-lg-5'>Pagamentos</h3>
                <Tabs className='mt-4 dashboard__tabs' defaultActiveKey='boleto'>
                <Tab title='Boleto' eventKey='boleto'>
                        <Form className='p-4'>
                            <Form.Group controlId="formBarCode">
                                <Form.Label className='fw-bold'>Código de barras</Form.Label>
                                <Form.Control type="number" placeholder="Insira o código de barras" />
                            </Form.Group>

                            <Form.Group controlId="formPaymentType" className='my-5'>
                                <Form.Label className='fw-bold'>Forma de Pagamento</Form.Label>
                                <Form>
                                    <Form.Check
                                        inline  
                                        type='radio'
                                        id='inline-radio-1'
                                        label='Débito em Conta Corrente'
                                        name='paymentType'
                                    />
                                    <Form.Check 
                                        inline
                                        type='radio'
                                        id='inline-radio-2'
                                        label='Crédito em Conta Corrente'
                                        name='paymentType'
                                    />
                                </Form>
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Continuar
                            </Button>
                        </Form> 
                    </Tab>
                    <Tab title='Transferência' eventKey='transfer'>
                        <Form className='p-4'>
                            <Form.Group controlId="formTransfer">
                                <Row>
                                    <Col xs={12} lg={4} className='mb-3 mb-sm-0'>
                                        <Form.Label className='fw-bold'>Banco</Form.Label>
                                        <Form.Control as="select" defaultValue="Selecione...">
                                            <option>Selecione...</option>
                                            <option>MultiBanco</option>
                                            <option>Cofre do Brasil</option>
                                            <option>Banco Santo André</option>
                                        </ Form.Control>
                                    </Col>
                                    <Col xs={12} lg={4} className='mb-3 mb-sm-0'>
                                        <Form.Label className='fw-bold'>Agência</Form.Label>
                                        <Form.Control type="number" />
                                    </Col>
                                    <Col xs={12} lg={4} className='mb-3 mb-sm-0'>
                                        <Form.Label className='fw-bold'>Conta corrente</Form.Label>
                                        <Form.Control type="number" />
                                    </Col>
                                </Row>
                                <Row className='my-lg-4'>
                                    <Col xs={12} lg={6} className='mb-3 mb-sm-0'>
                                        <Form.Label className='fw-bold'>Valor da transferência</Form.Label>
                                        <Form.Group as={Row} className="mb-2">
                                            <InputGroup.Prepend className='d-flex m-0'>
                                                <InputGroup.Text>R$</InputGroup.Text>
                                                <Form.Control placeholder="00,00" className='d-flex m-0' />  
                                            </InputGroup.Prepend>
                                               
                                        </Form.Group>                                            
                                    </Col>
                                    <Col xs={12} lg={6} className='mb-4 mb-sm-0'>
                                        <Form.Label className='fw-bold'>Identificação nos extratos</Form.Label>
                                        <Form.Control type="text" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Continuar
                            </Button>
                        </Form>  
                    </Tab>
                    
                </Tabs>
            </Col>
        </>
    );}

export default AccountPayments
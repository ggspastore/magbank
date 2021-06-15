import React from "react";
import { 
    Modal,
    Form,
    Button
} from "react-bootstrap";

import './AccountModal.scss';

const AccountModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Seu nome</Form.Label>
                  <Form.Control type="text" placeholder="Nome completo" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Seu e-mail</Form.Label>
                  <Form.Control type="email" placeholder="nome@exemplo.com.br" />
                </Form.Group>

                <Form.Group controlId="formBasicCity">
                    <Form.Label> Tipo de conta </Form.Label>
                    <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                        <option value="0">Poupança</option>
                        <option value="1">Conta Salário</option>
                        <option value="2">Conta de Investimentos</option>
                        <option value="3">Premium</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Eu li e concordo com os termos de uso" />
                </Form.Group>

            </Form>
            
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" type="submit">
                Cancelar
            </Button>

            <Button variant="primary" type="submit">
                Criar conta
            </Button>
        </Modal.Footer>
    </Modal>
);

export default AccountModal;

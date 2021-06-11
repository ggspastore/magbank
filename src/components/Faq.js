import React, { useEffect, useState } from 'react';
import { 
    Container,
    Row,
    Col,
    Accordion,
    Card
} from 'react-bootstrap';
import IconText from './IconText';
import { 
    faCreditCard,
    faWallet,
    faShieldAlt,
    faUserTie
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Faq.scss';

const Faq = () => { 
    const options = [
        { icon: faCreditCard, text: 'Cartão de crédito e débito' },
        { icon: faWallet, text: 'Conta e abertura' },
        { icon: faShieldAlt, text: 'Token digital' },
        { icon: faUserTie, text: 'Produtos e serviços' },
    ]

    const [ index, setIndex ] = useState(0);

    const handleClick = key => {
        setIndex(key);
    }

    useEffect(() => [index])
 
    return (
        <section className='faq text-light'>
            <Container className='py-5'>
                <Row>
                    <h2 className='text-center display-5 mb-5'>Dúvidas frequentes</h2>
                </Row>
                <Row className='d-flex align-content-center justify-items-center'>
                    <Col className='d-lg-none mb-3' xs={12}>
                        <Row>
                            {options.map(({ icon }, key) => (
                                <Col className='d-flex align-items-center justify-items-center' key={key} >
                                    <FontAwesomeIcon 
                                        icon={icon} 
                                        className='faq-clickable' 
                                        size='2x' 
                                        color={key === index ? '#FFF' : '#BBB'} 
                                        onClick={() => handleClick(key)} 
                                    />
                                </Col>
                            ))}
                        </Row>
                        <Row className='mt-4'>
                            <p className='lead text-center'>{options[index].text}</p>
                        </Row>
                    </Col>
                    <Col className='d-none d-lg-block'>
                        {options.map(({ icon, text}, key) => (
                            <IconText 
                                icon={icon} 
                                size={3} 
                                color={key === index ? '#FFF' : '#BBB'}
                                textColor={key === index ? '#FFF' : '#BBB'}
                                iconClass={'faq-clickable'} 
                                textClass={'lead faq-clickable'} 
                                onClick={() => handleClick(key)} key={key}
                            >{text}
                            </IconText>
                        ))}
                    </Col>
                    <Col>
                        <Accordion defaultActiveKey={`${index}`} activeKey={`${index}`}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} variant='link' eventKey='0' className='text-start faq-clickable'>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className='text-start'>Nunc in auctor est. Donec tristique arcu ante, facilisis lacinia mi auctor eget. Vivamus vitae facilisis ipsum. Donec libero est, aliquam id mollis et, posuere eu magna. Cras quis dolor ut turpis imperdiet accumsan ut ut turpis. Curabitur scelerisque erat orci, nec pharetra risus molestie eu. Mauris volutpat et nibh ac vehicula.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" className='text-start'>
                                    Nulla porttitor eros ac ex tristique posuere
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className='text-start'>usce nec convallis risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam consectetur hendrerit dui, at porttitor lectus vestibulum id. Nullam ultrices porttitor hendrerit. Aenean varius turpis non velit lobortis accumsan. Nam a lectus vitae purus tincidunt pharetra.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" className='text-start'>
                                    Quisque fringilla tincidunt arcu
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className='text-start'>Cras aliquam, orci sit amet pellentesque eleifend, odio leo dictum ipsum, eu consectetur erat tellus sit amet risus. Etiam mauris urna, efficitur ac elementum fermentum, pulvinar quis odio. Etiam rhoncus cursus neque, id ultricies erat accumsan eget. Praesent vitae ultrices diam. Integer porta ut quam non consectetur. Sed id scelerisque ex.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey="3" className='text-start'>
                                    Nam elementum lobortis purus a maximus tortor
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className='text-start'>Nunc ullamcorper tellus ut iaculis tincidunt. Nulla at eros ornare, scelerisque neque nec, laoreet enim. Donec bibendum hendrerit nisl. Mauris vel posuere dui. Vestibulum tellus turpis, efficitur ut urna porta, aliquet mattis augue. Suspendisse finibus nec metus convallis aliquam.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );}

export default Faq
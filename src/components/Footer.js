import React from 'react';
import { 
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookSquare,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo__magbank-footer.svg';
import applestore from '../assets/applestore.png';
import googleplay from '../assets/googleplay.png'

import './Footer.scss';

const Footer = () => (
    <footer>
        <Container>
            <Row className='text-center py-5'>
                <Col xs={12} lg={6} className='text-lg-left mb-4 mb-lg-0'>
                    <a href='#'><Image src={logo} /></a>
                </Col>
                <Col xs={12} lg={4} className='mb-4 mb-lg-0'>
                    <a href='https://www.apple.com/br/app-store/' target='_blank' rel='noopener noreferrer'>
                        <Image src={applestore} className='mx-2' />
                    </a>
                    <a href='https://play.google.com/store' target='_blank' rel='noopener noreferrer'>
                        <Image src={googleplay} className='mx-2 mx-lg-3' />
                    </a>
                </Col>
                <Col xs={12} lg={2} className='d-flex align-items-center justify-content-center justify-content-lg-evenly'>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faFacebookSquare} color='#7c7c7c' size='2x' className='mx-2 mx-lg-0' />
                    </a>
                    <a href='https://twitter.com/?lang=pt-br' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faTwitter} color='#7c7c7c' size='2x' className='mx-2 mx-lg-0' />
                    </a>
                    <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faYoutube} color='#7c7c7c' size='2x' className='mx-2 mx-lg-0' />
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;

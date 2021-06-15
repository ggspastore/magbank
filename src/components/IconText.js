import React from 'react';
import { 
    Row,
    Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconText = (
    { icon, 
    size = '1', 
    color = '#000',
    textColor = '', 
    textClass = '',
    iconClass = '', 
    rowClass = '',
    onClick, 
    children }
    ) => (
        <Row className={`${rowClass}`} onClick={onClick}>
            <Col xs={size} className='d-flex justify-content-center'>
                <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} className={iconClass} />
            </Col>
            <Col xs={12 - size} className={textClass} color={textColor}>
                {children}
            </Col>
        </Row>
)

export default IconText

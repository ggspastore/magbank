import React from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
} from 'react-bootstrap';
import './BlogCards.scss';

const BlogCards = ({ posts }) => (
        <Container>
            <Row>
                {posts && 
                posts.map(
                    ({ postId, postImage, postTitle, postExcerpt, postAction }) => (
                        <Col xs={12} lg={4} key={postId}>              
                            <Card className='mx-auto my-3'>
                                <Card.Img variant="top" src={postImage} />
                                <Card.Body>
                                    <Card.Title>{postTitle}</Card.Title>
                                    <Card.Text>{postExcerpt}</Card.Text>
                                    <Button variant='danger'>{postAction}</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    )}
            </Row>
        </Container>
           
        
);

export default BlogCards;

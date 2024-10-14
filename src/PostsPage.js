import React from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'


function PostsPage() {
    return (
        <div>
            
            <Container>
  <Row>
    <Col sm={8}>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
        
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card></Col>
<Col sm={8}>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
        
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card></Col>
<Col sm={8}>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
        
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card></Col>


  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container>



        </div>
    )
}

export default PostsPage

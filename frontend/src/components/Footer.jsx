import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
    return (
        <footer>
           <Container>
               <Row>
                   <Col className="footer">
                   Copyright &copy; ProShop
                   </Col>
               </Row>
           </Container>
       </footer> 
    )
}
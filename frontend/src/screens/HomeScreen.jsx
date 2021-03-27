import React from 'react'
import products from '../products'
import {Col, Row} from 'react-bootstrap'
import Product from '../components/Product'
/**
 * Bootstrap Grid system is divided into 12 columns 
 * @returns 
 */
export default function HomeScreen() {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} xl={3} lg={4}>
                        <Product product={product}></Product>
                     </Col>
                ))}
            </Row>
        </div>
    )
}

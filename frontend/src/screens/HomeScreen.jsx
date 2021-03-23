import React from 'react';
import { Row, Col} from 'react-bootstrap';
import Footer from '../components/Footer';
import Products from '../components/Products';

export default function HomeScreen() {
    return (
        <div>
            <h1>Latest Products</h1> 
            <Row>
                {products.map(product =>{
                    /**
                     * These are different breakpoints for a Column
                     * 
                     */
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <h3>{product.name}</h3>
                    </Col>
                })}
            </Row>
        </div>
    )
}

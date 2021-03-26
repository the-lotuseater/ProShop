import React, {useState, useEffect} from 'react';
import { Row, Col} from 'react-bootstrap';
import Footer from '../components/Footer';
import Products from '../components/Products';
import axios from 'axios'
import URL from '../contants/api.constants';


/**
 * Use effect is triggered everytime the components loads or when one of the state properties is updated. We can select either of the cases
 * by setting the element to an empty array.
 */
export default function HomeScreen()  {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('URL/api/products').then(response=>{setProducts(response)});
    },[])

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

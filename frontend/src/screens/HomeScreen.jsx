import React, {useEffect, useState} from 'react'
import {Col, Row} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import PRODUCTS_API from '../constants/api.constants'
import {listProducts} from '../actions/ProductActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useSelector, useDispatch } from 'react-redux'

/**
 * INFO: Bootstrap Grid system is divided into 12 columns 
 * @returns 
 */
export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { error, loading, products } = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            <h1>Latest Products</h1>
            {
                loading ? <Loader/>
                : error ? <Message variant="danger" children={error}/> 
                : 
                    (<Row>
                        {products.map(product => (
                            <Col sm={12} md={6} xl={3} lg={4}>
                                <Product product={product}></Product>
                            </Col>
                        ))}
                    </Row>)
            }
        </div>
    )
}

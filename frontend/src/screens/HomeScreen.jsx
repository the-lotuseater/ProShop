import React, {useEffect, useState} from 'react'
//import products from '../products'
import {Col, Row} from 'react-bootstrap'
import Product from '../components/Product'
import {listProducts} from '../actions/ProductActions'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'

/**
 * INFO: Bootstrap Grid system is divided into 12 columns 
 * @returns 
 */
 function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [ dispatch ])

    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
            }
        </div>
    )
}

export default HomeScreen

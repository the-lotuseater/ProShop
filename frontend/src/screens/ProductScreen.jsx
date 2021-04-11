import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import PRODUCTS_API from '../constants/api.constants'
import { useSelector, useDispatch } from 'react-redux'
import {listProductDetails} from '../actions/ProductActions'


export default function ProductScreen({match}) {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    const addItemToCart = () => {
        console.log(product)
    } 

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    return (
        <div>
            <Link to="/">
                <Button className="btn btn-light">
                    <i className="fas fa-angle-left fa-5x"></i>
                </Button>
            </Link>

        { loading ? <Loader/>
            : error ? <Message variant="danger" childern={error}/>
                : (
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid></Image>
                        </Col>


                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color="#ffbf00"></Rating>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>


                        <Col md={3}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Price: 
                                            </Col>
                                            <Col>
                                                <strong>${product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Status: 
                                            </Col>
                                            <Col>
                                                {product.countInStock > 0 ? "In Stock":"Out of Stock"}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Button className="btn-block" disabled={!product.countInStock} onClick={addItemToCart}>Add to Cart</Button>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )
        }   
            </div>
        )
    }

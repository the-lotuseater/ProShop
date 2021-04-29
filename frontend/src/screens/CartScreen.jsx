import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../actions/CartActions'
import BackButton from '../components/BackButton'
import Message from '../components/Message'
import {Link} from 'react-router-dom'

export default function CartScreen() {
    console.log("Entering cart screen.")
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const { cartItems } = cart
    
    return (
    <Row>
        <Col md={8}>
            <h1> Shopping Cart </h1>
            { 
                cartItems.length === 0 ? (
                    <Message variant="info">
                        Your Cart is Empty
                    </Message>
                ) : (
                        <ListGroup variant="flush">
                            { 
                                cartItems.forEach(item => console.log(item))
                            }
                            {cartItems.map(
                                item => (
                                    <ListGroup.Item key = {item.product}>
                                        <Row>
                                            <Col md={2}>
                                                <Image src = {item.Image}></Image>
                                            </Col>
                                            <Col md={3}>
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </Col>
                                            <Col md={2}>
                                                ${item.price}
                                            </Col>
                                        </Row>
                                        
                                    </ListGroup.Item>
                                )
                            )}
                        </ListGroup>
                    )
            }
        </Col>


        <Col md={4}>
        </Col>
    </Row>)
}
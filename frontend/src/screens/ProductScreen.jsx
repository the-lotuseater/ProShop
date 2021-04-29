import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card, Form, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import PRODUCTS_API from '../constants/api.constants'
import { useDispatch, useSelector } from 'react-redux'
import {listProductDetails} from '../actions/ProductActions';
import { addToCart } from '../actions/CartActions'

export default function ProductScreen({match, history}) {
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product } = productDetails

    const addItemToCart = () =>{
        console.log("Entering addItemToCart.")
        dispatch(addToCart(match.params.id, qty))
    } 

    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
    },[])

    return (
        <div>
            <Link to="/">
                <Button className="btn btn-light">
                    <i className="fas fa-angle-left fa-5x"></i>
                </Button>
            </Link>

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

                            {
                                product.countInStock > 0 && 
                                <ListGroupItem> 
                                    <Row>
                                        <Col> Qty </Col>
                                        <Col xs="auto" className="my-0.5">
                                            <Form.Control as="select"
                                                value={qty}
                                                onChange={(e) => {
                                                    setQty(e.target.value)
                                                }}
                                            >
                                                {
                                                    [...Array(product.countInStock).keys()].map((x) => 
                                                        (<option key={ x + 1} value={ x + 1 }>{x + 1}</option>)
                                                    )
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroupItem> 
                            }

                            <ListGroup.Item>
                                <Row>
                                    <Button className="btn-block" disabled={product.countInStock==0} onClick={addItemToCart}>Add to Cart</Button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

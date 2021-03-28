import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

/**
 * The advantage of using a Link instead of an href is that Link loads a new component into the same page instead of opening a new page and 
 * that in turn makes things a lot faster for you web app. 
 * @param {product} param0 
 */
export default function Product({product}) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}></Card.Img>
            </Link>

            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>    
                </Card.Title>
            </Link>
            </Card.Body>
            
            <Card.Text as="div">
                <div className="my-3">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#ffbf00'}></Rating>
                    </div>
            </Card.Text>

            <Card.Text as ="h3">
                ${product.price} 
            </Card.Text>
        </Card>
    )
}

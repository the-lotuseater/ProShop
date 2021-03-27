import React from 'react'
import { Card } from 'react-bootstrap'

export default function Product({product}) {
    return (
        <Card className="product">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image}></Card.Img>
            </a>

            <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>    
                </Card.Title>
            </a>
            </Card.Body>
            
            <Card.Text as="div">
                <div className="rating">
                    {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>

            <Card.Text as ="h3">
                ${product.price} 
            </Card.Text>
        </Card>
    )
}

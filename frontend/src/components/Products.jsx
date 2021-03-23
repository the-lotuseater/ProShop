import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';


/**
 * Use the Link element from jsx and route using the to prop to the link you want
 * USE LINK: The advantage of using a Link element from ReactJs is that 
 * the product does not open in a new window, rather it load a new component into the screen. 
 * @param {product} param0 
 * @returns 
 */
export default function Product({ product }){
    return(
        <Card className="Card" rounded>
            Product
            <Link to={`/product/${product._id}`}>
                <Card.Img src = {product.image}></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="products-card">
                        {product.rating} from {product.numReviews} reviews
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color = "#f8e825"></Rating>
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                  ${product.price} 
                </Card.Text>
            </Card.Body>
        </Card>

    )
}
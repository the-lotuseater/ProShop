import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default function BackButton() {
    return (
        <Link to="/">
            <Button className="btn btn-light">
            <i className="fas fa-angle-left fa-5x"></i>
            </Button>
        </Link>
    )
}

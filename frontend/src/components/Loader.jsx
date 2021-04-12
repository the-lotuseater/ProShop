import React from 'react'
import { Spinner } from 'react-bootstrap'

 export default function Loader() {
    return (
        <Spinner
            animation='border'
            align="center"
            role='status'
            className = "loader" 
        >
            <span className='sr-only'>Loading...</span>
        </Spinner>
    )
}
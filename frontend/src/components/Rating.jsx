import React from 'react'

/**
 * Move Reusable Rating component in other places. 
 * @param { value, text, color}
 * @returns 
 */
export default function Rating({ value, text, color }) {
    return (
        <div className="rating">
            <span>
                <i style={{ color } } className={ value >=1 ? 'fas fa-star': value >= 0.5 ? 'fas fa-star-half-alt':'far fa-star'}></i>
            </span>
            <span>
                <i style = {{ color }} className={value >= 4 ? 'fas fa-star': value >= 1.5 ? 'fas fas-star-half-alt':'far fa-star'}></i>
            </span>

            <span>{text && text}</span>
        </div>
    );
}

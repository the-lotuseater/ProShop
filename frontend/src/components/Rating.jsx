import React from 'react'

/**
 * Common Rating component to be used for the HomeScreen Product star components and the Product Screen
 * Note on the star icon from CDNs
 * fas fa-star is the for a complete filled star fas fa-star-half-alt is for a half filled star and far fa-star is for a unfilled star.
 * @param {value} param0 
 */
export default function Rating({value, text, color}) {
    return (
            <div className="rating">
                <span>
                    <i style={{color}} className={
                        value >= 1
                        ? "fas fa-star": value >=0.5 ? "fas fa-star-half-alt":"far fa-star"
                    }>
                    </i>
                </span>

                <span>
                    <i style={{color}} className={
                        value >=2 
                        ? "fas fa-star": value >=1.5 ? "fas fa-star-half-alt":"far fa-star"
                    }>
                    </i>
                </span>

                <span>
                    <i style={{color}} className={
                        value >=3 
                        ? "fas fa-star": value >=2.5 ? "fas fa-star-half-alt":"far fa-star"
                    }>
                    </i>
                </span>

                <span>
                    <i style={{color}} className={
                        value >=4 
                        ? "fas fa-star": value >=3.5 ? "fas fa-star-half-alt":"far fa-star"
                    }>
                    </i>
                </span>

                <span>
                    <i style={{color}} className={
                        value >=5 
                        ? "fas fa-star": value >=4.5 ? "fas fa-star-half-alt":"far fa-star"
                    }>
                    </i>
                </span>
                
                <span>{text && text}</span>
            </div>
    )
}

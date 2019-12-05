import React from 'react'

const SectionLink = ({text, className, image}) => {
    return (
        <div className={className}>
            <h6>{text}</h6>
            <img src={image} alt="yellow" />
        </div>
    )
}

export default SectionLink

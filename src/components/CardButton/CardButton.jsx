import React from 'react'
import './CardButton.css';


function CardButton({ children }) {
    return (
        <button className='card-button'>
            {children}
        </button>
    )
}

export default CardButton


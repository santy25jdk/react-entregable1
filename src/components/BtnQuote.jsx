
import React from 'react'

const BtnQuote = ( {click, objStyleBtn} ) => {
    
    return (
    <button style={objStyleBtn} className='card__btn' onClick={click}  >&gt;</button>
    )
}

export default BtnQuote
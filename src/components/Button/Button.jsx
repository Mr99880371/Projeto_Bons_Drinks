import React from 'react'
import './Button.css'

const Button = (props) => {
    const type = props.type
    const content = props.content
    return(
        <button type={type} className="botaoSubmit">{content}</button>
    )
}

export default Button
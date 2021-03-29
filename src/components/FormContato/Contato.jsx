import React from 'react'
import contato from '../../img/contact-pic.689e126c.jpg'
import Button from '../Button/Button'
import './Contato.css'

export default function Contato() {
    return (
        <div className="contato">
            <h1 className="titulo">Contato</h1>
            <div>
                <img className="imgContato" src={ contato } alt="logo" />
            </div>
            <form className = "formContato">
                <div className = "labelWrapper">
                    <label className = "inputLabel">Nome:</label>
                    <input type = "text" className = "inputText"></input>
                </div> 
                <div className = "labelWrapper" >
                    <label className = "inputLabel">Email:</label> 
                    <input type = "text"className = "inputText" ></input>
                </div> 
                <div>
                    <label className = "inputLabel">Mensagem:</label>
                    <textarea className = "textArea"></textarea>
                    <br></br>
                    <div className="button">
                    <Button type="submit" content="Enviar" />
                    </div>
                </div>
            </form>
        </div>
        
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return(
        <header className="menu">
        <nav className="navMenu">
                <Link to="/drinks">Nossos Drinks</Link>
                <Link to="/sobre-nos">Sobre Nós</Link>
                <Link to="/" className= "logoBD">Bons Drinks</Link>
                <Link to="nosso-time">Nosso Time</Link>
                <Link to="/contato">Contato</Link>
        </nav>
        </header>
    )
}
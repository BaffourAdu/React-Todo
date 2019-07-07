import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link to="/" style={linkStyle}>Home</Link> |
            <Link to="/about" style={linkStyle}> About</Link>
        </header>
    )
}

const headerStyle = {
    padding:'20px',
    background: '#333',
    color: '#fff',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header;
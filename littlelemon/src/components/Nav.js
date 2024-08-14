import React, {useState} from 'react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return <nav className = {`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" classname="logo">
            <img src = "logo.jpg" height={50} alt="Little Lemon logo"/>
        </a>

        {/*Mobile Navbar*/}
        <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>

        {/*Navigation Bar Items*/}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/orderonline">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
}

export default Nav;
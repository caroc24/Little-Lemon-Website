import React, {useState} from 'react';

export default function Nav(){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return <nav className = {`navbar`}>
        <img src = "logo.jpg" height={50} alt="Little Lemon logo"/>
        <div className="navlinks">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderonline">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>

    </nav>
}


import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return <header className = "header">
        <section>
            {/* Banner Texts */}
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>
            {/* Banner Image */}
            <div>
                <img src="" alt=""/>
            </div>
        </section>
    </header>
}

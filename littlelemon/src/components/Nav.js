export default function Nav(){
    return <nav className = "nav">
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


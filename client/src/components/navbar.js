import "./navbar.css";

export default function Navbar() {
    return (
        <nav>
            <div className="logo-section">
                <img src="/icons/logo.svg" alt="logo" className="logo" />
                <h1><a href="/" className="logo-text">Ration</a></h1>
            </div>
            <ul className="links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/recipes">Recipe</a>
                </li>
                <li>
                    <a href="/login" className="login-button">Log In</a>
                </li>
            </ul>
        </nav>
    );
}
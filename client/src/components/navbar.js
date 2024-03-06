import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./navbar.css";

const elements = (
    <>
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
    </>
)

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className="logo-section">
                <img src="/icons/logo.svg" alt="logo" className="logo" />
                <h1><a href="/" className="logo-text">Ration</a></h1>
            </div>
            <div className="hamburger" onClick={() => {setIsOpen(!isOpen)}}>
                <FontAwesomeIcon icon={ faBars } />
            </div>
            <ul className="links">
                {elements}
            </ul>
            <div className={"mobile-menu " + (isOpen ? "enabled" : "")}>
                <ul>
                    {elements}
                </ul>
            </div>
        </nav>
    );
}
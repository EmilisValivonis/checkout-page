import React, { useState } from "react";
import "../assets/styles/components/header.scss";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <h1 className="header-logo">
                    7 <span className="header-logo-highlight">yes</span>
                </h1>

                {/* Navigation */}
                <nav className="header-nav">
                    <a href="#" className="nav-link">Categories</a>
                    <a href="#" className="nav-link">Pages</a>
                    <a href="#" className="nav-link">Account</a>
                    <a href="#" className="nav-link">Blog</a>
                    <a href="#" className="nav-link">Reviews</a>
                </nav>

                {/* Icons */}
                <div className="header-icons">
                    
                        <button className="icon-button">
                            <img src="/header_images/sun.jpg" alt="Sun Icon" className="icon-image" />
                        </button>
                        <label className="toggle-switch">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="toggle-track"></div>
                        </label>
                        <button className="icon-button">
                            <img src="/header_images/moon.jpg" alt="Moon Icon" className="icon-image" />
                        </button>
                 
                    <button className="icon-button">
                        <img src="/header_images/search.jpg" alt="Search Icon" className="icon-image" />
                    </button>
                    <button className="icon-button">
                        <img src="/header_images/user.jpg" alt="User Icon" className="icon-image" />
                    </button>
                    <button className="mobile-menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
                <a href="#" className="nav-link">Categories</a>
                <a href="#" className="nav-link">Pages</a>
                <a href="#" className="nav-link">Account</a>
                <a href="#" className="nav-link">Blog</a>
                <a href="#" className="nav-link">Reviews</a>
            </div>
        </header>
    );
};

export default Header;

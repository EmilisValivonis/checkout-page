import React, { useState, useEffect } from "react";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            document.body.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="header bg-white dark:bg-gray-900 py-4 w-full fixed top-0 left-0 z-50">
            <div className="header-container container mx-auto flex justify-between items-center px-4 lg:px-8">
                {/* Logo */}
                <div>
                    <h1 className="header-logo text-2xl font-bold text-green-primary leading-none">
                        7 <span className="header-logo-highlight text-black dark:text-white">yes</span>
                    </h1>
                    {/* Breadcrumb */}
                    <nav className="breadcrumb text-sm text-gray-500 mt-1">
                        Home &gt; Shop &gt;
                        <span className="text-green-500 font-medium"> Checkout</span>
                    </nav>
                </div>

                {/* Navigation */}
                <nav className="header-nav hidden lg:flex space-x-6 items-center">
                    <a href="#" className="nav-link text-gray-700 hover:text-green-primary">Categories</a>
                    <a href="#" className="nav-link text-green-primary font-medium">Pages</a>
                    <a href="#" className="nav-link text-gray-700 hover:text-green-primary">Account</a>
                    <a href="#" className="nav-link text-gray-700 hover:text-green-primary">Blog</a>
                    <a href="#" className="nav-link text-gray-700 hover:text-green-primary">Reviews</a>
                </nav>

                {/* Icons */}
                <div className="header-icons flex items-center space-x-4">
                    {/* Sun and Moon Icons */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="/header_images/sun.jpg"
                            alt="Sun Icon"
                            className="icon-image w-5 h-5"
                        />
                        <label className="toggle-switch relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                            />
                            <div className="toggle-track w-11 h-6 bg-gray-200 rounded-full transition-all peer-checked:bg-green-primary"></div>
                            <div className="absolute top-0.5 left-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all peer-checked:translate-x-full peer-checked:border-white"></div>
                        </label>
                        <img
                            src="/header_images/moon.jpg"
                            alt="Moon Icon"
                            className="icon-image w-5 h-5"
                        />
                    </div>

                    {/* Search Icon */}
                    <button className="icon-button p-2 rounded-full hover:bg-gray-200 transition-all">
                        <img src="/header_images/search.jpg" alt="Search Icon" className="icon-image w-5 h-5" />
                    </button>

                    {/* User Icon */}
                    <button className="icon-button p-2 rounded-full hover:bg-gray-200 transition-all">
                        <img src="/header_images/user.jpg" alt="User Icon" className="icon-image w-5 h-5" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle block lg:hidden text-gray-700 text-2xl"
                        onClick={toggleTheme}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

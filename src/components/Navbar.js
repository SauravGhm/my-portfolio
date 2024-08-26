import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" data-aos="fade-down" data-aos-delay="200">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

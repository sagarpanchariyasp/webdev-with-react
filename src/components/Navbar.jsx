import React, { useState } from "react";
import Logo from "./logo.svg";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    return <nav>
        <img  src={Logo} alt="WebDev with React" id="logo" />
        <div className="menu-icon" onClick={(toggleMenu)}> 
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isOpen ? "active" : ""} >
            <li className="menu"><a href="#">Home</a></li>
            <li className="menu"><a href="#why-react"> Why React</a></li>
            <li className="menu"><a href="#profit-react">Benefits</a></li>
            <li className="menu"><a href="#contact-section">Contact</a></li>
            <li className="menu"><a href="https://sagarpanchariya.online">About Us</a></li>
        </ul>
    </nav>
}

export default Navbar;
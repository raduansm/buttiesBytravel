import React from 'react';
import './nav_bar.css'; // Import the CSS file
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
    return (
        <nav className="nav-bar"> {/* Apply the nav-bar class */}
            <div className="logo">BuddiesByTravel</div> {/* Added logo */}
            <ul className="menu"> {/* Apply the menu class */}

                <li>
                    <a href="/home">Home</a>
                </li>

                <li>
                    <a href="/Tour">Create Tour</a>
                </li>
                <li>
                    <a href="/profile">Tours</a>
                    
                </li>
                <li>
                    <a href="/blog">Request</a>
                </li>
                <li>
                    <a href="">Logout</a>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/second">Second Page</Link>
                </li>
                <li>
                    <Link to="/nothing-here">Nothing Here</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;

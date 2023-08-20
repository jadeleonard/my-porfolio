import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(props) {
    return (
        <div className="navbar flex justify-between container mx-auto">
            <ul className="inline-flex gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><a href="">About</a></li>
                <li><a href=""></a></li>

            </ul>

        </div>
    );
}

export default Navbar;
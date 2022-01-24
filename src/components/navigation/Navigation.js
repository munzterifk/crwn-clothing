import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navigation = () => {
    const location = useLocation();
    console.log('location :>> ', location);
    return (
        <div>
             <nav>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/newhome" >New Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <a href="/users" onClick={event => {
    // stop the browser from changing the URL and requesting the new document
    event.preventDefault();
    // push an entry into the browser history stack and change the URL
    window.history.pushState({}, undefined, "/contact");
  }}>Custom</a>
                </li>
            </ul>
            </nav>
        </div>
    )
}

import React from 'react';
import { Link } from "react-router-dom"; 

export default ({currentUser, logout}) => {
    if (currentUser) {
        return (
            <div>
                <h3>Welcome back, {currentUser.username}!</h3>
                <button onClick={logout}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
};
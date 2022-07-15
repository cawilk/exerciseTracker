import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">ExcerTracker</Link>
            <div className="collapse navbar-collapse">
            <ul classname="navbar-nav mr-auto">
            <li classname="navbar-item">
            <Link to="/" classname="nav-link">Exercises</Link>
            </li>
            <li classname="navbar-item">
            <Link to="/create" classname="nav-link">Create Exercises Log</Link>
            </li>
            <li className="navbar-item">
            <Link to="/user" classname="nav-link">Create User</Link>
            </li>
            </ul>
            </div>
            </nav>
        );
    }
}
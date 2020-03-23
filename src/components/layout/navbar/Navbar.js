import React, { Fragment } from 'react';
import "./Navbar.scss"


const Navbar = () => {

    const onClick = () => {
        let check = document.getElementsByClassName("checkbox")[0]
        check.checked = false;
    }

    return (
        <Fragment>
        <input type="checkbox" className="checkbox" id="toggleNav"/>

        <ul className="navigation">
            <a href="#home" className="navigation__link" onClick={() => onClick()}>Home</a>
            <a href="#protection" className="navigation__link" onClick={() => onClick()}>Protection</a>
            <a href="#core" className="navigation__link" onClick={() => onClick()}>Core Information</a>
        </ul>

        <label htmlFor="toggleNav" className="hamburger">
        <span className="hamburger__line hamburger__line--1"></span>
        <span className="hamburger__line hamburger__line--2"></span>
        <span className="hamburger__line hamburger__line--3"></span>
        </label>
        <div className="background"></div>
        

        </Fragment>
    );
}

export default Navbar;

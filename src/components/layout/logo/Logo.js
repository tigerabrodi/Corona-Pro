import React, { Fragment } from 'react';
import LogoIcon from "../../../assets/virus.png"
import "./Logo.scss"
const Logo = ({top}) => {
    return (
        <Fragment>
        <img src={LogoIcon} alt="logo" className="logo logo-1"/>
        <img src={LogoIcon} alt="logo" className="logo logo-2"/>
        <img src={LogoIcon} alt="logo" className="logo logo-3"/>
        </Fragment>
    );
}

export default Logo;

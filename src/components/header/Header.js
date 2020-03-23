import React from 'react';
import headerImage from "../../assets/corona-dropping.jpg"
import "./Header.scss"
import cautionSVG from "../../assets/risk.svg"
import skullSVG from "../../assets/poison.svg"
import sirenSVG from "../../assets/siren.svg"
import tedrosImage from "../../assets/tedros-header.jpg"
import fireSVG from "../../assets/fire.svg"
const Header = () => {
    return (
        <section id="home" className="header" data-aos="fade-down" data-aos-duration="1500" >
            <img src={cautionSVG} alt="header-caution" className="header__background-icon"/>

            <div className="header__wrapper">
                <div className="header__text-wrapper" data-aos="slide-right" data-aos-duration="1200">
                    <h1 className="header__title">Coronavirus</h1>
                    <p className="header__text">Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).</p>
                </div>
                <div className="header__image-wrapper">
                    <img src={headerImage} alt="wuhan" className="header__image"/>
                    <img src={skullSVG} alt="skull" className="header__icon header__icon-skull"/>
                    <img src={sirenSVG} alt="siren" className="header__icon header__icon-siren"/>
                    <img src={fireSVG} alt="fire" className="header__icon header__icon-fire"/>
                    <img src={tedrosImage} alt="tedros" className="header__icon header__icon-tedros"/>
                </div>
            </div>
        </section>
    );
}

export default Header;

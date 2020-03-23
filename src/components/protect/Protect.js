import React, {Fragment} from 'react';
import "./Protect.scss";
import Modal from './popup/Modal';
const Protect = () => {
    return (
    <Fragment>
        <div id="protection" style={{visibility: "hidden", opacity: "0"}}></div>
        <section className="protect" data-aos="fade-up" data-aos-duration="1300">
            <div className="protect__wrapper">
                <h1 className="protect__title">Protect Yourself!</h1>
                <p className="protect__text">This is very serious, and many people have died from this virus already. Even World Health Organisation declared this as a global pandemic. Protect yourself and the people you love by doing some of the things shown after you have clicked the button below!</p>
                <a href="#popup" className="protect__link">Learn More!</a>
                </div>
        </section>
        <Modal />
    </Fragment>
    );
}

export default Protect;

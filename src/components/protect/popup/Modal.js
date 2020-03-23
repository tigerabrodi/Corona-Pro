import React from 'react';
import "./Modal.scss"
import bedImage from "../../../assets/covid-bed.png"
import cleanImage from "../../../assets/covid-clean-table.png"
import socialImage from "../../../assets/covid-avoid-contact.png"
import handsImage from "../../../assets/covid-wash-hands.png"


const Modal = () => {
    return (
        <section className="modal" id="popup">
            <div className="modal__content">
                <a href="#modal" className="modal__close">&times;</a>
                <div id="modal" className="modal__item-wrapper">
                    <div className="modal__item-box">
                        <p className="modal__text">Stay home if you are sick, except to get medical care. Also if you are sick, 
                        try to drink lots of water, rest, and eat healthy foods such as Oats, whole grain, nuts etc.</p>
                        <img src={bedImage} alt="modal-pic" className="modal__image"/>
                    </div>
                    <div className="modal__item-box">
                    <p className="modal__text">Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</p>
                    <img src={cleanImage} alt="modal-pic" className="modal__image"/>
                    </div>
                </div>
                <div className="modal__item-wrapper">
                <div className="modal__item-box">
                <p className="modal__text">Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.
                If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol.</p>
                <img src={handsImage} alt="modal-pic" className="modal__image"/>
                </div>
                <div className="modal__item-box">
                <p className="modal__text">Avoid close contact with people who are sick.
                Put distance between yourself and other people if COVID-19 is spreading in your community. This is especially important for people who are at higher risk of getting very sick.</p>
                <img src={socialImage} alt="modal-pic" className="modal__image"/>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Modal;

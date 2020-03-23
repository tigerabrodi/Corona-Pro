import React from 'react';
import wenliangImage from "../../assets/wenliang.jpg"
import wuhanImage from "../../assets/wuhan.jpg"
import "./General.scss"



const General = () => {
    return (
        <section id="core" className="general" data-aos="slide-right" data-aos-duration="1300">
            <h1 className="general__title">Core Information</h1>
            <div className="general__card--wrapper">
                <div class="general__card">
                    <div class="general__card__side general__card__side--front">
                        <img src={wenliangImage} alt="wenliang" className="general__card__image"/>
                        <h1 className="general__card__title">Li Wenliang</h1>
                    </div>
                    <div class="general__card__side general__card__side--back">
                            <p className="general__card__details">
                            Li Wenliang was a Chinese ophthalmologist at Wuhan Central Hospital who on 30 December 2019 warned his colleagues about a possible outbreak of an illness that resembled severe acute respiratory syndrome (SARS), later acknowledged as COVID-19. He became a whistleblower when his warnings were later shared publicly. On 3 January 2020, Wuhan police summoned and admonished him for "making false comments on the Internet". Li returned to work, later contracted the virus from an infected patient and died from the disease on 7 February 2020, at age 33.
                            </p>            
                    </div>
                </div>
                <div class="general__card">
                <div class="general__card__side general__card__side--front">
                    <img src={wuhanImage} alt="wuhan" className="general__card__image"/>
                    <h1 className="general__card__title">Wuhan</h1>
                </div>
                <div class="general__card__side general__card__side--back">
                <p className="general__card__details">Wuhan is the capital of Hubei province, People's Republic of China. It is the largest city in Hubei and the most populous city in Central China, with a population of over 11 million, the ninth most populous Chinese city, and one of the nine National Central Cities of China.  As of early 2020, outside China, Wuhan is most widely recognized as the origin of outbreak of the worldwide pandemic of COVID-19, or coronavirus. The city has been under lockdown since January 2020 as a result of the 2019–20 coronavirus pandemic.</p>            
                </div>
            </div>
            </div>
        </section>

    );
}

export default General;

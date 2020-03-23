import React, { Fragment } from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from './components/header/Header';
import Logo from './components/layout/logo/Logo';
import Protect from './components/protect/Protect';
import General from "./components/general/General"
import Footer from './components/footer/Footer';
import Navbar from './components/layout/navbar/Navbar';
AOS.init();

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Logo top={true} />
      <Fragment>
            <Header />
            <Protect />
            <General />
            <Footer />
      </Fragment>
    </Fragment>
  );
}

export default App;

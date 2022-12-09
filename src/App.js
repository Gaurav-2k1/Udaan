import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Navbar from './components/Navbar/Navbar';
// import Teacher from './components/teacher/Teacher';
import Choose from './components/whychoose/Choose';
import Features from './components/Feature-section/Features';
import Gallery from './components/gallery/Gallery';
import Footer from './components/Footer/Footer';
import Contact from './components/contactus/Contact';
const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <About />
            {/* <Teacher /> */}
            <Choose />
            <Features />
            <Gallery />
            <Contact />
            <Footer />
        </Fragment>

    )
}

export default App
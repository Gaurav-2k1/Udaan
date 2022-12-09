import React, { useRef } from "react";
import { Container } from "reactstrap";
import './Navbar.css';
import logo from '../../assets/logo/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx'
const navLinks = [
    {
        display: "Home",
        url: "#",
    },
    {
        display: "About",
        url: "#about",
    },
    {
        display: "Teachers",
        url: "#teachers",
    },
    {
        display: "Activities",
        url: "#activities",
    },
    {
        display: "Gallery",
        url: "#gallery",
    },
    {
        display: "Contact Us",
        url: "#contact",
    },
];
const Navbar = () => {
    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle("active__menu");

    return (
        <header className="header">
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    <a href={navLinks[0].url}>
                        <div>
                            <div className="logodiv">
                            </div>
                            <img src={logo} alt="" className="logoimage" />
                        </div>
                    </a>



                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav__list">
                                {navLinks.map((item, index) => (
                                    <li key={index} className="nav__item">
                                        <a href={item.url}>{item.display}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>

                    <div className="mobile__menu">
                        <span>
                            <RxHamburgerMenu onClick={menuToggle} />
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )

}

export default Navbar
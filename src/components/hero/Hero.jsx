import React from 'react'
import './Hero.css';
import { Container, Col } from "reactstrap";

import im from '../../assets/hero/heroi.png'

const Hero = () => {
    return (
        <section className='hero'>
            <Container className='my-5'>
                <div className='row'>
                    <Col lg="6" md="6">
                        <div className="heroContent">
                            <h2 className="mb-4 hero__title">
                                Play & Learn  <br /> How To Create New Things
                            </h2>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                                quas officiis et repellat!
                            </p>
                            <div className='learnMore'>Learn More</div>
                        </div>

                    </Col>

                    <Col lg="6" md="6">
                        <img src={im} alt="" className="w-100 hero__img" />
                    </Col>
                </div>
            </Container>
        </section>

    )
}

export default Hero;


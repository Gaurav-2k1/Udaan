import React from 'react'
import './About.css'
import { Container, Col, Row } from 'reactstrap'
import hero from '../../assets/hero/hero.jpg'
const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" md="6" className='d-flex justify-content-center'>
            <div className="aboutimg">
              <img src={hero} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="aboutcontent">
              <h1>About KinderGarden</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>

              <ul>
                <li>
                  🔴 Individual attention in small class sitting
                </li>
                <li>
                  🔴 Individual attention in small class sitting
                </li>
                <li>
                  🔴 Individual attention in small class sitting
                </li>
                <li>
                  🔴 Individual attention in small class sitting
                </li>
              </ul>

              <div className='ReadMore'>
                Read More
              </div>


            </div>
          </Col>
        </Row>
      </Container>

    </section>

  )
}

export default About
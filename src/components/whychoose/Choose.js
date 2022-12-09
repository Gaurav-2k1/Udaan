import React from "react";
import { Col, Container, Row } from 'reactstrap'
import './choose.css';
import ReactPlayer from "react-player";

const Choose = () => {

    return (
        <section className="chooseus" id="activities">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="choose__content">
                            <h2>Our Activities</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolores cupiditate facilis provident quidem accusamus impedit
                                tenetur laboriosam debitis nisi eius!
                            </p>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="choose__img">
                            <ReactPlayer
                                url="https://www.youtube.com/watch?v=wnNZXYNTBB8"
                                controls
                                width="100%"
                                height="350px"
                            />

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Choose
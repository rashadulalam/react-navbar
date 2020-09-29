import React, {Component} from 'react';
import {Row, Col, Container, Jumbotron} from "react-bootstrap";
import Menu from "../component/Menu";



class Services extends Component {
    render() {
        return (
            <>
                <Menu>
                    <Jumbotron>
                        <Container className="text-center">
                            <h1>Services</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                        </Container>
                    </Jumbotron>
                    <Container className="mb-5">
                        <Row>
                            <Col lg="4">
                                <h3>Servics title</h3>
                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </p>
                            </Col>
                            <Col lg="4">
                                <h3>Servics title</h3>
                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </p>
                            </Col>
                            <Col lg="4">
                                <h3>Servics title</h3>
                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                </Menu>
            </>
        );
    }
}

export default Services;
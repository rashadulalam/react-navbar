import React, {Component} from 'react';
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import Menu from "../component/Menu";


class About extends Component {
    render() {
        return (
            <>
                <Menu>
                    <Jumbotron>
                        <Container className="text-center">
                            <h1>Aabout Us</h1>
                        </Container>
                    </Jumbotron>
                    <Container className="mb-5">
                        <Row>
                            <Col lg="12">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                            </Col>
                        </Row>
                    </Container>

                </Menu>
            </>
        );
    }
}

export default About;
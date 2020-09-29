import React, {Component} from 'react';
import {Jumbotron, Button, Container, Row, Col, Card} from "react-bootstrap";
import Menu from "../component/Menu";

class Home extends Component {
    render() {
        return (
            <>
                <Menu>
                    <Jumbotron className="text-center">
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                    <section className="py-5">
                        <Container>
                            <Row>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/237/200/200" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/102/200/200" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/1024/200/200" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Menu>
            </>
        );
    }
}

export default Home;
import React, {Component} from 'react';
import {Button, Col, Container, Form, Jumbotron, Row} from "react-bootstrap";
import Menu from "../component/Menu";

class Contact extends Component {
    render() {
        return (
            <>
                <Menu>
                    <Jumbotron>
                        <Container className="text-center">
                            <h1>Contact</h1>
                            <p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
                            </p>
                        </Container>
                    </Jumbotron>
                    <Container className="mb-5">
                        <Row className="justify-content-center">
                            <Col lg="6">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Subject" />
                                    </Form.Group>


                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>


                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>

                        </Row>
                    </Container>
                </Menu>
            </>
        );
    }
}

export default Contact;
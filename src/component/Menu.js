import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/services">Services</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {this.props.children}
            </>
        );
    }
}

export default Menu;
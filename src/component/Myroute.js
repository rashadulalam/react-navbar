import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Footer from "./Footer";
class Myroute extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={Contact} />

                </Switch>
                <Footer />
            </>
        );
    }
}

export default Myroute;
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./screens/Home";
import About from "./screens/About";
import Portfolio from "./screens/Portfolio";

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/portfolio" exact component={Portfolio}></Route>
                </Switch>
            </Router>
        )
    }
}
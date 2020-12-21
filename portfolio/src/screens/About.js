import React, { Component } from "react";
import Header from "../components/Header";
import Resume from "../assets/Resume.pdf";
import Container from "react-bootstrap/Container";

export default class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <br />
                <Container>
                    <object data={`${Resume}?#zoom=75`} type="application/pdf" width="100%" height="800vh"/>
                </Container>
            </div>
        )
    }
}
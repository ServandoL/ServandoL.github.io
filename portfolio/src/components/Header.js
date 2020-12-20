import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">SL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Button variant="outline" style={{margin: 10, paddingRight: 30}}><Link to="/" style={{color: "black"}}>Home</Link></Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button variant="outline" style={{margin: 10, paddingRight: 30}}><Link to="/about" style={{color: "black"}}>About</Link></Button>
                    </Nav.Item>
                    <Nav.Item>
                        <Button variant="outline" style={{margin: 10, paddingRight: 30}}><Link to="/portfolio" style={{color: "black"}}>Portfolio</Link></Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
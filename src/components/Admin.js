import React from 'react';
import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddDrug from "./AddDrug";
import DrugsList from "./DrugsList";

export default function Admin() {
    const [drugId, setDrugId] = useState("");

    const getDrugIdHandler = (id) => {
        console.log("Thd ID of drug to be edited: ", id);
        setDrugId(id);
    };
    return (
        // <h2>Welcome to Admin Page</h2>
        <>
            <Navbar bg="dark" variant="dark" className="header">
                <Container>
                <Navbar.Brand href="/">Med My Day</Navbar.Brand>
                </Container>
            </Navbar>

            <Container style={{ width: "400px" }}>
                <Row>
                <Col>
                    <AddDrug id={drugId} setDrugId={setDrugId} />
                </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                <Col>
                    <DrugsList getDrugId={getDrugIdHandler} />
                </Col>
                </Row>
            </Container>
        </>
    );
}
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Brick from "./Brick";
import { blockColors } from "./viejoOperation";

import "./Modal.css";

function ModalSelector({ onSelected, show, header }) {
  return (
    <>
      <Modal animation={false} show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="3">
                <Brick
                  color={blockColors[0]}
                  text={"#ff8500"}
                  onClick={() => {
                    onSelected("#ff8500");
                  }}
                />
              </Col>
              <Col xs lg="3">
                <Brick
                  color={blockColors[1]}
                  text={"#00861c"}
                  onClick={() => {
                    onSelected("#00861c");
                  }}
                />
              </Col>
              <Col xs lg="3">
                <Brick
                  color={blockColors[2]}
                  text={"#0055bf"}
                  onClick={() => {
                    onSelected("#0055bf");
                  }}
                />
              </Col>
            </Row>
            <br></br>
            <Row className="justify-content-md-center">
              <Col xs lg="3">
                <Brick
                  color={blockColors[3]}
                  text={"#51a5db"}
                  onClick={() => {
                    onSelected("#51a5db");
                  }}
                />
              </Col>
              <Col xs lg="3">
                <Brick
                  color={blockColors[4]}
                  text={"#ffed00"}
                  onClick={() => {
                    onSelected("#ffed00");
                  }}
                />
              </Col>
              <Col xs lg="3">
                <Brick
                  color={blockColors[5]}
                  text={"#e3000b"}
                  onClick={() => {
                    onSelected("#e3000b");
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Colorear</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSelector;

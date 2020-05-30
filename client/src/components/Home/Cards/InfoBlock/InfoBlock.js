  
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function InfoBlock() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <p>
            rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum
            har vært bransjens standard for dummytekst helt siden 1500-ta llet,
            da en ukjent boktrykker stokket en mengde bokstaver for å lage et
            prøveeksemplar av en bok. Lorem Ipsum har tålt tidens ta nn
            usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer
            også tålt
          </p>
        </Col>
      </Row>
    </Container>
  );
}

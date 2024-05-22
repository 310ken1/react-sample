import { Col, Container, Form, Row } from "react-bootstrap";

export default function LayoutSample(): JSX.Element {
  return (
    <>
      <Container>
        <Row>
          <Col xl={4} lg={4} md={6} sm={12}>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Label column>Input1</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Input1" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xl={4} lg={4} md={6} sm={12}>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Label column>Input1</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Input1" />
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xl={4} lg={4} md={6} sm={12}>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Label column>Input1</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="text" placeholder="Input1" />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

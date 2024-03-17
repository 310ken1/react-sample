"use client";

import { Col, Container, Row } from "react-bootstrap";

const GridPage = () => {
  return (
    <>
      <h3>中央表示（デフォルト）</h3>
      <Container>
        <Row>横幅を12分割</Row>
        <Row>
          <Col>01</Col>
          <Col>02</Col>
          <Col>03</Col>
          <Col>04</Col>
          <Col>05</Col>
          <Col>06</Col>
          <Col>07</Col>
          <Col>08</Col>
          <Col>09</Col>
          <Col>10</Col>
          <Col>11</Col>
          <Col>12</Col>
        </Row>
        <Row>
          col-lg-XのXで区分の使用数を指定
          <br />
          lgはXが適用される画面サイズ(lgだけXが適用され、lg以外は等幅)
        </Row>
        <Row>
          <Col className="col-lg-6 bg-primary">X=6</Col>
          <Col className="col-lg-3 bg-secondary">X=3</Col>
          <Col className="col-lg-2 bg-success">X=2</Col>
          <Col className="col-lg-1 bg-warning">X=1</Col>
        </Row>
        <Row>col-sm-Xの場合</Row>
        <Row>
          <Col className="col-sm-6 bg-primary">X=6</Col>
          <Col className="col-sm-3 bg-secondary">X=3</Col>
          <Col className="col-sm-2 bg-success">X=2</Col>
          <Col className="col-sm-1 bg-warning">X=1</Col>
        </Row>
        <Row>Xの指定がない場合は等幅</Row>
        <Row>
          <Col className="bg-primary">01</Col>
          <Col className="bg-secondary">02</Col>
          <Col className="bg-success">03</Col>
        </Row>
        <Row>
          lg={"{"}X{"}"}のXで区分を指定
        </Row>
        <Row>
          <Col className="bg-primary" lg={6}>
            lg={"{"}6{"}"}
          </Col>
          <Col className="bg-secondary" lg={4}>
            lg={"{"}4{"}"}
          </Col>
          <Col className="bg-success">指定なし</Col>
        </Row>
        <Row>
          md={"{"}X{"}"}のXで区分を指定
        </Row>
        <Row>
          <Col className="bg-primary" md={6}>
            md={"{"}6{"}"}
          </Col>
          <Col className="bg-secondary" md={4}>
            md={"{"}4{"}"}
          </Col>
          <Col className="bg-success">指定なし</Col>
        </Row>
      </Container>
      <br />
      <h3>fluid指定で横幅100%</h3>
      <Container fluid>
        <Row>横幅を12分割</Row>
        <Row>
          <Col>01</Col>
          <Col>02</Col>
          <Col>03</Col>
          <Col>04</Col>
          <Col>05</Col>
          <Col>06</Col>
          <Col>07</Col>
          <Col>08</Col>
          <Col>09</Col>
          <Col>10</Col>
          <Col>11</Col>
          <Col>12</Col>
        </Row>
        <Row>
          col-lg-XのXで区分の使用数を指定
          <br />
          lgはXが適用される画面サイズ(lgだけXが適用され、lg以外は等幅)
        </Row>
        <Row>
          <Col className="col-lg-6 bg-primary">X=6</Col>
          <Col className="col-lg-3 bg-secondary">X=3</Col>
          <Col className="col-lg-2 bg-success">X=2</Col>
          <Col className="col-lg-1 bg-warning">X=1</Col>
        </Row>
        <Row>col-sm-Xの場合</Row>
        <Row>
          <Col className="col-sm-6 bg-primary">X=6</Col>
          <Col className="col-sm-3 bg-secondary">X=3</Col>
          <Col className="col-sm-2 bg-success">X=2</Col>
          <Col className="col-sm-1 bg-warning">X=1</Col>
        </Row>
        <Row>Xの指定がない場合は等幅</Row>
        <Row>
          <Col className="bg-primary">01</Col>
          <Col className="bg-secondary">02</Col>
          <Col className="bg-success">03</Col>
        </Row>
        <Row>
          lg={"{"}X{"}"}のXで区分を指定
        </Row>
        <Row>
          <Col className="bg-primary" lg={6}>
            lg={"{"}6{"}"}
          </Col>
          <Col className="bg-secondary" lg={4}>
            lg={"{"}4{"}"}
          </Col>
          <Col className="bg-success">指定なし</Col>
        </Row>
        <Row>
          md={"{"}X{"}"}のXで区分を指定
        </Row>
        <Row>
          <Col className="bg-primary" md={6}>
            md={"{"}6{"}"}
          </Col>
          <Col className="bg-secondary" md={4}>
            md={"{"}4{"}"}
          </Col>
          <Col className="bg-success">指定なし</Col>
        </Row>
      </Container>
    </>
  );
};
export default GridPage;

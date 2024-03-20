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
        <hr />
        <Row>
          &lt;Col className=&quot;col-lg-X&ldquo;&gt;のXで区分の使用数を指定
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
        <Row>col-lg-Xの指定がない場合は等幅</Row>
        <Row>
          <Col className="bg-primary">01</Col>
          <Col className="bg-secondary">02</Col>
          <Col className="bg-success">03</Col>
        </Row>
        <hr />
        <Row>
          &lt;Col lg={"{"}X{"}"}&gt;のXで区分を指定
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
        <hr />
        <Row>&lt;Col xs=&quot;auto&ldquo;&gt;で、内容にフィッティング</Row>
        <Row>
          <Col xs="auto" className="bg-primary">
            xs=&quot;auto&ldquo;
          </Col>
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
          <Col xs="auto" className="bg-success">
            〇〇〇〇〇xs=&quot;auto&ldquo;〇〇〇〇〇
          </Col>
        </Row>
        <hr />
        <Row>&lt;Col className=&quot;mx-X&ldquo;&gt;のXで左右マージを指定</Row>
        <Row>
          <Col className="mx-1 bg-primary">mx-1</Col>
          <Col className="mx-3 bg-secondary">mx-3</Col>
          <Col className="mx-5 bg-success">mx-5</Col>
          <Col className="mx-auto bg-warning">mx-auto</Col>
        </Row>
        <hr />
        <Row>&lt;Col className=&quot;my-X&ldquo;&gt;のXで上下マージを指定</Row>
        <Row>
          <Col className="my-1 bg-primary">my-1</Col>
          <Col className="my-3 bg-secondary">my-3</Col>
          <Col className="my-5 bg-success">my-5</Col>
          <Col className="my-auto bg-warning">my-auto</Col>
        </Row>
        <hr />
        <Row>
          &lt;Col className=&quot;px-X&ldquo;&gt;のXで左右パディングを指定
        </Row>
        <Row>
          <Col className="px-1 bg-primary">px-1</Col>
          <Col className="px-3 bg-secondary">px-3</Col>
          <Col className="px-5 bg-success">px-5</Col>
          <Col className="px-auto bg-warning">px-auto</Col>
        </Row>
        <hr />
        <Row>
          &lt;Col className=&quot;py-X&ldquo;&gt;のXで上下パティングを指定
        </Row>
        <Row>
          <Col className="py-1 bg-primary">py-1</Col>
          <Col className="py-3 bg-secondary">py-3</Col>
          <Col className="py-5 bg-success">py-5</Col>
          <Col className="py-auto bg-warning">py-auto</Col>
        </Row>
        <hr />
        <Row>
          &lt;Row className=&quot;gap-X&ldquo;&gt;のXで水平方向のギャップを指定
        </Row>
        <Row className="gap-1">
          <Col className="bg-primary">gap-1</Col>
          <Col className="bg-secondary">gap-1</Col>
          <Col className="bg-success">gap-1</Col>
          <Col className="bg-warning">gap-1</Col>
        </Row>
        <Row className="gap-3">
          <Col className="bg-primary">gap-3</Col>
          <Col className="bg-secondary">gap-3</Col>
          <Col className="bg-success">gap-3</Col>
          <Col className="bg-warning">gap-3</Col>
        </Row>
        <Row className="gap-5">
          <Col className="bg-primary">gap-5</Col>
          <Col className="bg-secondary">gap-5</Col>
          <Col className="bg-success">gap-5</Col>
          <Col className="bg-warning">gap-5</Col>
        </Row>
        <hr />
        <Row>
          &lt;Row className=&quot;mx-X&ldquo;&gt;のXで水平方向のマージンを指定
        </Row>
        <Row className="mx-1">
          <Col className="bg-primary">mx-1</Col>
          <Col className="bg-secondary">mx-1</Col>
          <Col className="bg-success">mx-1</Col>
          <Col className="bg-warning">mx-1</Col>
        </Row>
        <Row className="mx-5">
          <Col className="bg-primary">mx-5</Col>
          <Col className="bg-secondary">mx-5</Col>
          <Col className="bg-success">mx-5</Col>
          <Col className="bg-warning">mx-5</Col>
        </Row>
        <hr />
        <Row>
          &lt;Row className=&quot;my-X&ldquo;&gt;のXで上下方向のマージンを指定
        </Row>
        <Row className="my-1">
          <Col className="bg-primary">my-1</Col>
          <Col className="bg-secondary">my-1</Col>
          <Col className="bg-success">my-1</Col>
          <Col className="bg-warning">my-1</Col>
        </Row>
        <Row className="my-3">
          <Col className="bg-primary">my-3</Col>
          <Col className="bg-secondary">my-3</Col>
          <Col className="bg-success">my-3</Col>
          <Col className="bg-warning">my-3</Col>
        </Row>
        <Row className="my-5">
          <Col className="bg-primary">my-5</Col>
          <Col className="bg-secondary">my-5</Col>
          <Col className="bg-success">my-5</Col>
          <Col className="bg-warning">my-5</Col>
        </Row>
      </Container>
      <hr />
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
        <hr />
        <Row>
          &lt;Col className=&quot;col-lg-X&ldquo;&gt;のXで区分の使用数を指定
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
        <Row>col-lg-Xの指定がない場合は等幅</Row>
        <Row>
          <Col className="bg-primary">01</Col>
          <Col className="bg-secondary">02</Col>
          <Col className="bg-success">03</Col>
        </Row>
        <hr />
        <Row>
          &lt;Col lg={"{"}X{"}"}&gt;のXで区分を指定
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

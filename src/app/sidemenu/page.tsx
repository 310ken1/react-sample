"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Col,
  Container,
  NavDropdown,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";

function SideMenu() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs="auto" className="bg-success" style={{ height: "100vh" }}>
            <Navbar className="flex-column">
              <Image
                src="/menu_FILL0_wght400_GRAD0_opsz24.svg"
                width={40}
                height={40}
                alt=""
                onClick={() => setShow(true)}
              />
              <NavDropdown
                style={{ position: "fixed", bottom: 0 }}
                className="dropup"
                title={
                  <Image
                    src="/settings_FILL0_wght400_GRAD0_opsz24.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                }
              >
                <NavDropdown.Item as={Link} href={"/"}>
                  ホーム
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar>
          </Col>
          <Col className="bg-warning"></Col>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>サイドメニュータイトル</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>サイドメニューボディ</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideMenu;

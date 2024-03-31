"use client";

import { AuthInfo, useAuthContext } from "@/contexts/useAuthContext";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const authInfo: AuthInfo = useAuthContext();
  return (
    <Navbar className="bg-primary">
      <Container fluid>
        <Navbar.Brand as={Link} href="/">
          Reactサンプル
        </Navbar.Brand>
        <Nav.Link href="/">{authInfo?.name}</Nav.Link>
      </Container>
    </Navbar>
  );
};
export default Header;

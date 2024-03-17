"use client";

import { AuthInfo, useAuthContext } from "@/contexts/useAuthContext";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const authInfo: AuthInfo = useAuthContext();
  return (
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand href="/">Reactサンプル</Navbar.Brand>
        <Nav.Link href="/">{authInfo?.name}</Nav.Link>
      </Container>
    </Navbar>
  );
};
export default Header;

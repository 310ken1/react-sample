"use client";

import { AuthInfo, useAuthContext } from "@/contexts/useAuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const [settings, setSettings] = useState<any | undefined>(undefined);
  const authInfo: AuthInfo = useAuthContext();

  useEffect(() => {
    (async () => {
      fetch("/public_settings.json")
        .then((response) => response.json())
        .then((data) => setSettings(data))
        .catch((error) => console.error("Error loading JSON:", error));
    })();
  }, []);

  return (
    <>
      <Navbar className="bg-primary">
        {settings?.public?.settings?.stage}
        <Container fluid>
          <Navbar.Brand as={Link} href="/">
            Reactサンプル
          </Navbar.Brand>
          <Nav.Link href="/">{authInfo?.name}</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;

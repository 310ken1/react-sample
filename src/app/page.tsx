"use client";

import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Container>
        <h1>React Bootstrap</h1>
        <Link href="/grid">Grid Systemサンプル</Link>
        <h1>Local Storage</h1>
        <Link href="/localstrage">LocalStorageサンプル</Link>
      </Container>
    </main>
  );
}

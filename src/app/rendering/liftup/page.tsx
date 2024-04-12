"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Show(): JSX.Element {
  const now = performance.now();
  return <>{`Slow component now=${now.toFixed(2)}`}</>;
}

function Form({ children }: Readonly<{ children: React.ReactNode }>) {
  const [update, setUpdate] = useState<number>(0);

  return (
    <>
      <Button onClick={() => setUpdate(update + 1)}>更新</Button>
      {children}
    </>
  );
}

export default function LiftupPage(): JSX.Element {
  return (
    <>
      <p>リフトアップパターン</p>
      <Form>
        <hr />
        <Show />
      </Form>
      <hr />
      <Link href="/rendering">レンダリングトップ</Link>
      <br />
      <Link href="/rendering/liftdown">リフトダウンパターン</Link>
      <br />
      <Link href="/rendering/liftup">リフトアップパターン</Link>
      <br />
      <Link href="/rendering/memo">メモ化</Link>
    </>
  );
}

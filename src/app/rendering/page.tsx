"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

function Show(): JSX.Element {
  const now = performance.now();
  return <>{`Slow component now=${now.toFixed(2)}`}</>;
}

export default function RenderingPage(): JSX.Element {
  const [update, setUpdate] = useState<number>(0);

  return (
    <>
      <p>
        更新ボタン押下でレンダリング
        <br />
        (Showがレンダリングされた場合は時間が更新)
      </p>
      <Button onClick={() => setUpdate(update + 1)}>更新</Button>
      <hr />
      <Show />
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

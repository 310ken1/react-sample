"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>React Bootstrap</p>
      <Link href="/grid">Grid Systemサンプル</Link>
      <br />
      <Link href="/sidemenu">サイドメニューサンプル</Link>
      <hr />

      <p>Web Storage</p>
      <Link href="/localstorage">LocalStorageサンプル</Link>
      <br />
      <Link href="/sessionstorage">SessionStorageサンプル</Link>
      <hr />

      <p>フック</p>
      <Link href="/context">useContextサンプル</Link>
      <br />
      <Link href="/api">カスタムフックによるWebAPIからのデータ取得</Link>
      <hr />

      <p>レンダリング</p>
      <Link href="/rendering">レンダリングの抑止</Link>
      <br />
      <Link href="/table">テーブルに行を追加した際のレンダリング抑止</Link>
    </main>
  );
}

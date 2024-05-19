"use client";

import Link from "next/link";
import messages from "@/messages.json";

export default function Home() {
  return (
    <main>
      <p>{messages.home.bootstrap.title}</p>
      <Link href="/grid">{messages.home.bootstrap.items.grid}</Link>
      <br />
      <Link href="/sidemenu">{messages.home.bootstrap.items.sidemenu}</Link>
      <hr />

      <p>{messages.home.storage.title}</p>
      <Link href="/localstorage">{messages.home.storage.items.local}</Link>
      <br />
      <Link href="/sessionstorage">{messages.home.storage.items.session}</Link>
      <hr />

      <p>{messages.home.hook.title}</p>
      <Link href="/context">{messages.home.hook.items.context}</Link>
      <br />
      <Link href="/api">{messages.home.hook.items.api}</Link>
      <hr />

      <p>{messages.home.rendering.title}</p>
      <Link href="/rendering">{messages.home.rendering.items.rendering}</Link>
      <br />
      <Link href="/table">{messages.home.rendering.items.table}</Link>
    </main>
  );
}

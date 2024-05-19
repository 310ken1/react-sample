"use client";

import {
  useSetValueContext,
  useValueContext,
} from "@/contexts/useValueContext";
import { Button } from "react-bootstrap";

export default function SessionStoragePage() {
  const value = useValueContext();
  const setValue = useSetValueContext();
  console.log(`SessionStoragePage value=${value}`);
  return (
    <>
      <p>{value}</p>
      <hr />
      <Button
        onClick={() => {
          const now = performance.now();
          setValue(String(now));
        }}
      >
        Context設定
      </Button>
    </>
  );
}

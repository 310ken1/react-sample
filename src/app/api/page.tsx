"use client";

import useOpenMeteo, { OpenMeteoConditions } from "@/hooks/useOpenMeteo";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const ApiPage = () => {
  const [conditions, setConditions] = useState<OpenMeteoConditions>();
  const [response, error, reading] = useOpenMeteo(conditions);

  return (
    <Container>
      <h1>OpenMeteo API</h1>
      <p>緯度: {conditions && conditions.latitude}</p>
      <p>経度: {conditions && conditions.longitude}</p>
      <p>
        状態:
        {reading !== undefined && (reading ? "読み込み中" : "読み込み完了")}
      </p>
      <Button
        className="my-1 mx-1"
        onClick={() => setConditions({ latitude: 30, longitude: 140 })}
      >
        緯度:30 経度:140
      </Button>
      <Button
        className="my-1 mx-1"
        onClick={() => setConditions({ latitude: 40, longitude: 150 })}
      >
        緯度:40 経度:150
      </Button>
      <p>エラー: {error && error.message}</p>
      <p>
        レスポンス:
        <br />
        {response && JSON.stringify(response)}
      </p>
    </Container>
  );
};

export default ApiPage;

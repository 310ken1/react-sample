"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { Button, Container, Form } from "react-bootstrap";

type TestValue = {
  value1: string;
  value2: number;
};

const LocalStoragePage = () => {
  const [test1, setTest1, deleteTest1] = useLocalStorage("test1", {
    value1: "aaaaa",
    value2: 12345,
  } as TestValue);

  const [test2, setTest2, deleteTest2] = useLocalStorage("test2", "テスト");

  return (
    <Container>
      <h1>Local Storage</h1>
      <h2>オブジェクトの保存</h2>
      <p>
        Key:&quot;test1&rdquo;
        <br />
        value1:{test1?.value1} value2:{test1?.value2}
      </p>
      <Form>
        <Form.Control
          onChange={(event) =>
            setTest1({ value1: event.target.value, value2: 9999 } as TestValue)
          }
        ></Form.Control>
      </Form>
      <Button onClick={() => deleteTest1()}>削除</Button>
      <h2>文字列の保存</h2>
      <p>
        Key:&quot;test2&rdquo;
        <br />
        value1:{test2}
      </p>
      <Form>
        <Form.Control
          onChange={(event) => setTest2(event.target.value)}
        ></Form.Control>
      </Form>
      <Button onClick={() => deleteTest2()}>削除</Button>
    </Container>
  );
};
export default LocalStoragePage;

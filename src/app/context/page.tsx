"use client";

import { AuthInfo, useSetAuthContext } from "@/contexts/useAuthContext";
import { Container, Form } from "react-bootstrap";

const ContextPage = () => {
  const setContext = useSetAuthContext();
  return (
    <Container>
      <Form>
        <Form.Label>入力した値をContextに保存し、ヘッダ部に表示する</Form.Label>
        <Form.Control
          onChange={(event) => {
            setContext({
              id: 12345,
              name: event.target.value,
              token: "",
            } as AuthInfo);
          }}
        ></Form.Control>
        <Form.Text muted>入力した値は、リロードで消える</Form.Text>
      </Form>
    </Container>
  );
};
export default ContextPage;

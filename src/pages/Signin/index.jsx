import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function Signin() {
  return (
    <Container>
      <Form>
        <h1>Kiss Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links últeis.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a href="#">Criar conta</a>
      </Form>

      <Background />
    </Container>
  );
}

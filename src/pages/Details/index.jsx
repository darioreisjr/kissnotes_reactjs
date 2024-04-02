import { Container } from "./styles";

import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Hello world!</h1>
      <span>Dario Reis</span>
      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />
    </Container>
  );
}

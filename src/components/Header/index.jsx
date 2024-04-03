import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/darioreisjr.png" alt="Foto de perfil" />

        <div>
          <span>Bem-vindo</span>
          <strong>Dario Reis</strong>
        </div>
      </Profile>
    </Container>
  );
}

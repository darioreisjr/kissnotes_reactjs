import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/darioreisjr.png" alt="Foto de perfil" />

        <div>
          <span>Bem-vindo</span>
          <strong>Dario Reis</strong>
        </div>
      </Profile>

      <Logout onClick={signOut} >
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}

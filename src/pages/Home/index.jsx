import { FiPlus } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Note } from "../../components/Note";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Kissnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="Reactjs" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "React" },
                { id: "2", name: "Js" },
                { id: "3", name: "Frontend" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}

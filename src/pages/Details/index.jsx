import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            venenatis vel turpis a maximus. Nam sit amet lacinia turpis. In
            hac habitasse platea dictumst. Pellentesque tincidunt, mauris vel
            sollicitudin tempus, purus augue tincidunt neque, sit amet
            iaculis ante nisl in odio. Nulla facilisi. Duis sit amet  nunc sed
            sapien volutpat viverra.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://darioreisjr.vercel.app/</a>
              </li>
              <li>
                <a href="#">https://darioreisjr.vercel.app/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

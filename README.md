![kissnotes](https://github.com/darioreisjr/kissnotes_reactjs/assets/85812823/5e8b8e7e-af33-4213-88c6-2e682e8b6729)

# KissNotes

O KissNotes é um aplicativo de bloco de notas minimalista e intuitivo, construído com ReactJS, Vite e Styled Components. Ele oferece uma interface simples e fácil de usar para criar, editar e organizar notas de texto, links e outros recursos. O KissNotes é perfeito para quem procura uma maneira rápida e eficiente de tomar notas, organizar ideias e salvar informações importantes.

## Stack utilizada

**Front-end:** ReactJS, Vite e Styled Components



## Apêndice

O KissNotes é um gerenciador de notas desenvolvido utilizando as tecnologias React.Js e Styled Components. A aplicação oferece as seguintes páginas:

- Login: Autenticação do usuário com email e senha. Opção para recuperar senha esquecida. Criação de nova conta (link para "Criar Cadastro").
- Criar Cadastro: Formulário para inserir dados do usuário (nome, email, senha). Confirmação de senha. Opção para ler os termos de serviço e política de privacidade. Botão para finalizar o cadastro.
- Profile: Visualização dos dados do usuário (nome, email). Edição dos dados do usuário. Opção para alterar a senha. Visualização do histórico de logins. Botão para desativar a conta.
- Nova Nota: Título e conteúdo da nota em um editor de texto simples. Formatação básica (negrito, itálico, listas). Opção para adicionar tags. Salvar a nota como rascunho ou publicar.
- Home: Lista de todas as notas do usuário em ordem cronológica inversa. Filtros por tags e data de criação. Barra de pesquisa para encontrar notas específicas. Botão para criar nova nota.
- Editar Nota: Título e conteúdo da nota em um editor de texto simples. Formatação básica (negrito, itálico, listas). Opção para adicionar tags. Salvar as alterações na nota. Excluir a nota.
- Detalhes da Nota: Título, conteúdo, tags e data de criação da nota. Opção para editar a nota. Opção para excluir a nota. Visualização do histórico de edições da nota. Compartilhamento da nota por link ou e-mail.

## Screenshots

![Macbook Pro-1713045808503](https://github.com/darioreisjr/kissnotes_reactjs/assets/85812823/5511e5a4-6596-4aac-abdf-a0d4e1d8a31e)

![Macbook Pro-1713045789765](https://github.com/darioreisjr/kissnotes_reactjs/assets/85812823/c0cf287a-d840-4d0f-9873-2b2ac49dfd77)

![Macbook Pro-1713045777542](https://github.com/darioreisjr/kissnotes_reactjs/assets/85812823/d67f9c3d-6a86-4dc1-a699-41ea12bd1c99)

![Macbook Pro-1713045994378](https://github.com/darioreisjr/kissnotes_reactjs/assets/85812823/5921a49d-c97a-4ab8-a19f-4741bdfa7338)

![Macbook Pro-1713045985953](https://github.com/darioreisjr/kissnotes_reactjs/assets/85812823/aff42e58-f4bb-4666-be6f-e15a535f9a4a)

![Macbook Pro-1713045859641](https://github.com/darioreisjr/kissnotes_reactjs/assets/85812823/13b79d43-530a-484e-b0a1-0ae74ee6fd50)


## Demonstração


https://github.com/darioreisjr/kissnotes_reactjs/assets/85812823/9d42fe58-8f73-4447-85da-324cd83e99f0



## Funcionalidades


- Criação e edição de notas: O KissNotes permite que você crie e edite notas de texto com formatação básica, como negrito, itálico e listas. Você também pode adicionar imagens, vídeos e outros arquivos às suas notas.
- Gerenciamento de links: Adicione links para páginas da web ou outros recursos e organize-os em categorias personalizadas.
- Organização em pastas: Crie pastas e subpastas para organizar suas notas e links de forma eficiente.
- Pesquisa: Encontre rapidamente as notas e links que você procura usando a função de pesquisa.
- Compartilhamento: Compartilhe suas notas com outras pessoas por meio de um link ou e-mail.

  
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/darioreisjr/kissnotes_reactjs.git
```

Entre no diretório do projeto

```bash
  cd kissnotes_reactjs
```

Instale as dependências

```bash
  pnpm install
```

Inicie o servidor

```bash
  pnpm run dev
```



## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor WHITE       | ![#F4EDE8](https://via.placeholder.com/10/18181b?text=+) #F4EDE8 |
| Cor ORANGE       | ![##FF9000](https://via.placeholder.com/10/8b5cf6?text=+) #FF9000 |
| Cor GRAY_100       | ![#999591](https://via.placeholder.com/10/71717a?text=+) #999591  |
| Cor GRAY_300       | ![#666360](https://via.placeholder.com/10/00000099?text=+) #666360 |
| Cor BACKGROUND_900      | ![#232129](https://via.placeholder.com/10/00000099?text=+) #232129 |
| Cor BACKGROUND_800       | ![#312E38](https://via.placeholder.com/10/00000099?text=+) #312E38 |
| Cor BACKGROUND_700       | ![#3E3B47](https://via.placeholder.com/10/00000099?text=+) #3E3B47 |


## Uso/Exemplos

```javascript
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


```


## Melhorias

- Implementar um sistema de lembretes para notificar os usuários sobre notas importantes ou prazos.
- Adicionar suporte para colaboração em tempo real.
- Permitir a integração com calendários e gerenciadores de tarefas.
- Tornar o aplicativo offline para que os usuários possam acessar suas notas e criar novas notas mesmo sem conexão com a internet.
- Criar um sistema de recompensas para incentivar os usuários a usar o KissNotes com mais frequência.
- Ao implementar essas melhorias, o KissNotes se tornará um aplicativo de bloco de notas ainda mais poderoso, versátil e fácil de usar, atendendo às necessidades de um público ainda maior de usuários.


## Aprendizados

#### Ao construir o DevStore, aprendi muito sobre as seguintes tecnologias:

#### Desenvolvimento com ReactJS, Vite e Styled Components:

- Domínio de conceitos: Aprofundamento na construção de interfaces web com ReactJS, incluindo componentes, estado, props, hooks e gerenciamento de rotas.
- Experiência com Vite: Aprimoramento no uso do Vite como ferramenta de bundling moderna, rápida e eficiente para projetos ReactJS.
- Maestria em Styled Components: Domínio da biblioteca Styled Components para estilização declarativa e reutilizável de componentes ReactJS.
  
#### Habilidades Aprimoradas:

- Arquitetura de Software: Planejamento e implementação de uma arquitetura de software modular e escalável para um aplicativo web robusto.
- Gerenciamento de Estado: Domínio de técnicas de gerenciamento de estado no ReactJS, utilizando Redux ou Context API para garantir a consistência dos dados da aplicação.
- Acessibilidade: Implementação de práticas de acessibilidade para garantir que o aplicativo seja utilizável por pessoas com deficiência.
- Testes Unitários: Aprimoramento na escrita de testes unitários para garantir a qualidade e confiabilidade do código.
- Desempenho: Otimização do código para melhorar o tempo de carregamento das páginas e a fluidez da interface.
- Segurança: Implementação de medidas de segurança para proteger os dados dos usuários.
  
#### Aprendizados Pessoais:

- Gerenciamento de Projetos: Desenvolvimento de habilidades de gerenciamento de projetos para planejar, executar e monitorar o desenvolvimento do aplicativo.
- Trabalho em Equipe: Aprimoramento da capacidade de trabalhar em equipe em um projeto colaborativo, comunicando-se de forma eficaz e resolvendo conflitos de forma construtiva.
- Aprendizagem Contínua: Reconhecimento da importância da aprendizagem contínua no desenvolvimento de software, mantendo-se atualizado com as últimas tecnologias e tendências.

#### Reflexões sobre o Processo de Desenvolvimento:

- Importância do Design: Reconhecimento da importância de um bom design de interface para a usabilidade e a experiência do usuário.
- Valor do Feedback: Compreensão do valor do feedback dos usuários para melhorar o aplicativo e atender às suas necessidades.
- Gestão de Tempo: Desenvolvimento de habilidades de gestão de tempo para cumprir prazos e entregar o projeto dentro do cronograma.
- Superação de Desafios: Aprimoramento da capacidade de superar desafios técnicos e encontrar soluções inovadoras para problemas.
- O processo de construção do KissNotes foi uma experiência valiosa que proporcionou aprendizados significativos em diversas áreas do desenvolvimento de software. As habilidades e conhecimentos adquiridos durante o projeto serão essenciais para futuros projetos e contribuirão para o meu crescimento profissional como desenvolvedor web.

## Autores

- [@darioreisjr](https://www.github.com/darioreisjr)


## Suporte

Para suporte ou melhorias, mande um email para dev.darioreis@gmail.com


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de dev.darioreis@gmail.com


## Relacionados

Segue alguns projetos relacionados

[FERRAMENTARIA OSTEN MOOVE](https://github.com/darioreisjr/ferramentaria_osten_moove_front_end)

[FERRAMENTARIA OSTEN MOOVE BACK-END](https://github.com/darioreisjr/ferramentaria_osten_moove_back_end-)



## Licença

[MIT](https://choosealicense.com/licenses/mit/)


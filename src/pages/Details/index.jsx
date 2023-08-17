import {Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title='Excluir nota' />
          <Section title="Links úteis">
            <Links>
              <li><a href="https://mateusfdev.github.io/portfolio/">GitHub</a></li>
              <li><a href="https://github.com/mateusfdev">Portify</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title='express' />
            <Tag title='nodejs' />
          </Section>

        <Button title='voltar'/>
      </Content>
    </main>
  </Container>   
  );
}
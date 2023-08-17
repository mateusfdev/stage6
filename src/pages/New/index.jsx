import { Link } from 'react-router-dom'; 
import { Header } from '../../components/Header';
import { Input } from "../../components/InputNine";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to='/'>Voltar</Link>
          </header>

          <Input placeholder='Titúlo' />
          <Textarea placeholder='Observações' />

          <Section title="Links úteis">
            <NoteItem isNew placeholder='Novo link' />
            <NoteItem value="https://github.com/mateusfdev" />
            <NoteItem value="https://rocketseat.com.br" />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="react" />
              <NoteItem value="nodejs" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title='Salvar'/>

        </Form>

      </main>
    </Container>
  );
}
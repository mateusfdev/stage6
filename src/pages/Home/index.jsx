import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';

import { Input } from '../../components/input';
import { Note } from '../../components/Note';

import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />
      <Menu>
        <li>
          <ButtonText title="todos" isActive /></li>
        <li>
          <ButtonText title="react" /></li>
        <li>
          <ButtonText title="nodejs" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              {id: '1', name: 'react'},
              {id: '2', name: 'nodejs'},
            ]
          }}
        />

        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  );
}
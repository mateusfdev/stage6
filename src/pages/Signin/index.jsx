import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function Signin(){
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para gerenciar seus links uteis</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title='Entrar' />

        <Link to='/register' href="#">
          Criar conta
        </Link>

      </Form>



    </Container>
  );
}
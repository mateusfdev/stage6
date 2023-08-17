import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function SignUp(){
  return(
    <Container>
      

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para gerenciar seus links uteis</p>

        <h2>Crie sua conta!</h2>

        <Input
          placeholder="Nick"
          type="text"
          icon={FiUser}
        />
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

        <Button title='Criar conta' />

        <Link to='/' href="#">
          Já tenho conta!
        </Link>

      </Form>

    </Container>
  );
}
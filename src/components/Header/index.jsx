import {  RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile to='/profile'>
        <img 
          src="https://github.com/mateusfdev.png"
          alt="profile photo"
        />        
        <div>
          <span>Bem-Vindo</span>
          <strong>Mateus Felipe</strong>
        </div>
      </Profile>
      
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
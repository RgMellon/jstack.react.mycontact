import logo from '../../assets/images/logo.svg';
import { Container, InputSearchContainer } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logo} alt="logo my-contacts" width={201} />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
    </Container>
  );
}

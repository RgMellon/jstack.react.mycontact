import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="flecha" width={10} />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Renan</strong>
            <small>category</small>
          </div>

          <span>rgmelo94@gmail.com</span>

          <span>9999999999999</span>
        </div>

        <div className="actions">
          <Link to="edit/120312">
            <img src={edit} alt="edit" />
          </Link>

          <button type="button">
            <img src={trash} alt="trash" />
          </button>
        </div>
      </Card>
    </Container>
  );
}

import { Card, Container, Header, ListContainer } from './style';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function ContactList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href=""> Novo contato </a>
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
          <a href="">
            <img src={edit} alt="edit" />
          </a>

          <button type="button">
            <img src={trash} alt="trash" />
          </button>
        </div>
      </Card>
    </Container>
  );
}

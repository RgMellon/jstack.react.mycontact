import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from './page.style';

import trash from '../../assets/images/icons/trash.svg';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';

import { Load } from '../../components/Load';

import { Link } from 'react-router-dom';

export function ContactView(props) {
  return (
    <Container>
      <Load isLoad={props.isLoad} />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          onChange={props.handleChangeSearch}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {props.filtredSearch.length}{' '}
          {props.contacts.length === 0 ? `Contato` : `Contatos`}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {props.filtredSearch.length > 0 && (
        <ListHeader orderby={props.orderby}>
          <button onClick={props.handleTogleOrder}>
            <span>Nome</span>
            <img src={arrow} alt="flecha" width={10} />
          </button>
        </ListHeader>
      )}

      {props.filtredSearch.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {!!contact?.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>

            <span>{contact.email}</span>

            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`edit/${contact.id}`}>
              <img src={edit} alt="edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}

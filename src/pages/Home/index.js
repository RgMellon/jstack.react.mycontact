import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filtredSearch = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then((result) => result.json())
      .then((data) => setContacts(data))
      .catch((err) => console.log(err));
  }, [orderBy]);

  function handleTogleOrder() {
    setOrderBy((oldState) => (oldState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato"
          onChange={handleChangeSearch}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filtredSearch.length}{' '}
          {contacts.length === 0 ? `Contato` : `Contatos`}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filtredSearch.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button onClick={handleTogleOrder}>
            <span>Nome</span>
            <img src={arrow} alt="flecha" width={10} />
          </button>
        </ListHeader>
      )}

      {filtredSearch.map((contact) => (
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

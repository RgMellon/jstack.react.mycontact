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
import { Load } from '../../components/Load';
import ContactsService from '../../services/ContactsService';
import ApiError from '../../errors/ApiError';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderby, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoad, setIsLoad] = useState(true);

  const filtredSearch = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setIsLoad(true);

    async function fetchData() {
      try {
        const contactList = await ContactsService.loadContacts(orderby);

        setContacts(contactList);

        setIsLoad(false);
      } catch (err) {
        if (err instanceof ApiError) {
          console.log('ERRO NA API', err);
        } else {
          console.log('Desconhecido');
        }
      } finally {
        setIsLoad(false);
      }
    }

    fetchData();
  }, [orderby]);

  function handleTogleOrder() {
    setOrderBy((oldState) => (oldState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Load isLoad={isLoad} />
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
        <ListHeader orderby={orderby}>
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

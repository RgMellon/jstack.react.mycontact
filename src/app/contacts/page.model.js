import { useEffect, useState } from 'react';
import ApiError from '../../errors/ApiError';

export function useContactsModel(service) {
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
        const contactList = await service.loadContacts(orderby);

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

  return {
    isLoad,
    handleChangeSearch,
    filtredSearch,
    contacts,
    orderby,
    handleTogleOrder,
  };
}

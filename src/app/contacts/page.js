import contactService from '../../services/ContactsService';
import { useContactsModel } from './page.model';
import { ContactView } from './page.view';

export function Contacts() {
  const methoods = useContactsModel(contactService);

  return <ContactView {...methoods} />;
}

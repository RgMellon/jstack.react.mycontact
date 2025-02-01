import { useNewContactModel } from './page.model';
import contactService from '../../services/ContactsService';
import { NewContactView } from './page.view';

export function NewContact() {
  const methoods = useNewContactModel(contactService);

  return <NewContactView {...methoods} />;
}

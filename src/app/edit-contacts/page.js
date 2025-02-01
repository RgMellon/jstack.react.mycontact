import { useParams } from 'react-router-dom';
import contactService from '../../services/ContactsService';
import { useEditContactModel } from './page.model';
import { EditContactView } from './page.view';

export function EditContact() {
  const { id } = useParams();

  const methoods = useEditContactModel(contactService, id);

  return <EditContactView {...methoods} />;
}

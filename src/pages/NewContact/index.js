import { ContactForm } from '../../components/ContactForm';
import { Load } from '../../components/Load';
import { Modal } from '../../components/Modal';
import { PageHeader } from '../../components/PageHeader';

export function NewContact() {
  return (
    <>
      <Load />
      <PageHeader title={'Novo contato'} />
      <ContactForm buttonLabel={'Cadatrar'} />
    </>
  );
}

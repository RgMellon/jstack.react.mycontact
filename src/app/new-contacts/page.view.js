import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function NewContactView(props) {
  return (
    <>
      <PageHeader title={'Novo contato'} />
      <ContactForm buttonLabel={'Cadatrar'} onSubmit={props.handleSubmit} />
    </>
  );
}

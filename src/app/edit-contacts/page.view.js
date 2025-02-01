import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function EditContactView(props) {
  return (
    <>
      <PageHeader title={'Editar'} />
      <ContactForm ref={props.formRef} buttonLabel={'Salvar alterações'} />
    </>
  );
}

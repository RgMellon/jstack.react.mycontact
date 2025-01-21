import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

export function NewContact() {
  async function handleSubmit(formData) {
    try {
      await ContactsService.create({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        category_id: formData.categoryId,
      });
    } catch {
      const event = new CustomEvent('addtoast', {
        detail: {
          type: 'danger',
          text: 'Erro ao cadastrar usuário',
        },
      });

      document.dispatchEvent(event);
    }
  }

  return (
    <>
      <PageHeader title={'Novo contato'} />
      <ContactForm buttonLabel={'Cadatrar'} onSubmit={handleSubmit} />
    </>
  );
}

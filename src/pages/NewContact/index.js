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
      alert('aconteu um erro, tente mais tarde');
    }
  }

  return (
    <>
      <PageHeader title={'Novo contato'} />
      <ContactForm buttonLabel={'Cadatrar'} onSubmit={handleSubmit} />
    </>
  );
}

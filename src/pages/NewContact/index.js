import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import { toast } from '../../utils/toast';

export function NewContact() {
  async function handleSubmit(formData) {

    try {
      await ContactsService.create({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        category_id: formData.categoryId,
      });

      toast({
        type: 'success',
        text: 'Cadastrado com sucesso',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar',
      });
    }
  }

  return (
    <>
      <PageHeader title={'Novo contato'} />
      <ContactForm buttonLabel={'Cadatrar'} onSubmit={handleSubmit} />
    </>
  );
}

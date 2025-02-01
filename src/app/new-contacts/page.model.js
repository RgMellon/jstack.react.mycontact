import { toast } from '../../utils/toast';

export function useNewContactModel(service) {
  async function handleSubmit(formData) {
    try {
      await service.create({
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

  return {
    handleSubmit,
  };
}

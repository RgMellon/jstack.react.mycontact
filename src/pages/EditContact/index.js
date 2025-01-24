import { useEffect, useRef } from 'react';
import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

export function EditContact() {
  const formRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function loadContactById() {
      try {
        const response = await ContactsService.getContactById(id);
        formRef.current.setFields(response);
      } catch (err) {
        toast({
          type: 'danger',
          text: 'Erro ao carregar usuário selecionado',
        });

        navigate('/');
      }
    }

    loadContactById();
  }, [id, navigate]);

  return (
    <>
      <PageHeader title={'Editar'} />
      <ContactForm ref={formRef} buttonLabel={'Salvar alterações'} />
    </>
  );
}

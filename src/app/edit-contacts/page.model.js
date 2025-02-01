import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from '../../utils/toast';

export function useEditContactModel(service, id) {
  const formRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadContactById() {
      try {
        const response = await service.getContactById(id);
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

  return {
    formRef,
  };
}

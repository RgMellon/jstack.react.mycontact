import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Form } from './style';
import { useError } from '../../hooks/useError';
import CategoriesService from '../../services/CategoriesService';

export const ContactForm = forwardRef(function ContactForm(
  { buttonLabel, onSubmit },
  ref
) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [loadCategories, setLoadCategories] = useState(true);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const { errors, handleEmailError, handleRequiredError } = useError();

  useEffect(() => {
    async function loadCategories() {
      try {
        const result = await CategoriesService.loadCategories();
        setCategories(result);
      } catch {
      } finally {
        setLoadCategories(false);
      }
    }

    loadCategories();
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        setFields: (contact) => {
          setEmail(contact.email);
          setName(contact.name);
          setCategoryId(contact.category_id);
          setPhone(contact.phone);
        },
      };
    },
    []
  );

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmiting(true);

    await onSubmit({
      name,
      email,
      phone,
      categoryId,
    });

    setIsSubmiting(false);
  }

  function handleChangeName(event) {
    const { value } = event.target;
    setName(value);

    handleRequiredError({
      field: 'name',
      message: 'Nome obrigatório',
      value,
    });
  }

  function handleChangeEmail(event) {
    const { value } = event.target;

    setEmail(value);

    handleEmailError({
      field: 'email',
      message: 'Email inválido',
      value,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={errors?.name?.message}>
        <Input
          value={name}
          onChange={handleChangeName}
          placeholder="Nome"
          error={!!errors?.name}
        />
      </FormGroup>

      <FormGroup error={errors?.email?.message}>
        <Input
          value={email}
          onChange={handleChangeEmail}
          placeholder="E-mail"
        />
      </FormGroup>

      <FormGroup>
        <Input
          value={phone}
          onChange={(value) => setPhone(value.target.value)}
          placeholder="Telefone"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={categoryId}
          onChange={(value) => setCategoryId(value.target.value)}
          disabled={loadCategories}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <Button disabled={isSubmiting} style={{ marginTop: 24 }} type="submit">
        {!isSubmiting ? buttonLabel : 'Enviando...'}
      </Button>
    </Form>
  );
});

import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Form } from './style';
import { useError } from '../../hooks/useError';
import CategoriesService from '../../services/CategoriesService';

export function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [loadCategories, setLoadCategories] = useState(true);
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

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      name,
      email,
      phone,
      categoryId,
    });
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
            <option value={category.id}>{category.name}</option>
          ))}
        </Select>
      </FormGroup>

      <Button style={{ marginTop: 24 }} type="submit">
        {buttonLabel}
      </Button>
    </Form>
  );
}

import { useState } from 'react';
import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Form } from './style';
import { useError } from '../../hooks/useError';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { errors, handleEmailError, handleRequiredError } = useError();

  function handleSubmit(event) {
    event.preventDefault();
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
          value={category}
          onChange={(value) => setCategory(value.target.value)}
        >
          <option value={'instagram'}>Instagram</option>
          <option value={'discord'}>Discord</option>
        </Select>
      </FormGroup>

      <Button style={{ marginTop: 24 }} type="submit">
        {buttonLabel}
      </Button>
    </Form>
  );
}

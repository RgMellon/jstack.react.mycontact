import { Button } from '../Button';
import { FormGroup } from '../FormGroup';
import { Input } from '../Input';
import { Select } from '../Select';
import { Form } from './style';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup error="Nome valido">
        <Input placeholder="Nome" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value={'instagram'}>Instagram</option>
        </Select>
      </FormGroup>

      <Button style={{ marginTop: 24 }} type="submit">
        {buttonLabel}
      </Button>
    </Form>
  );
}

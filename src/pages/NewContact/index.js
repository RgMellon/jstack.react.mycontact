import Button from '../../components/Button';
import Input from '../../components/Input';
import { PageHeader } from '../../components/PageHeader';
import Select from '../../components/Select';

export function NewContact() {
  return (
    <>
      <PageHeader title={'Novo contato'} />
      <div>
        <Input placeholder="Nome" />

        <Select>
          <option value={'123'}> Instagram</option>
        </Select>

        <Button type="button">Salvar informações</Button>

        <Button type="button" disabled>
          Salvar informações
        </Button>
      </div>
    </>
  );
}

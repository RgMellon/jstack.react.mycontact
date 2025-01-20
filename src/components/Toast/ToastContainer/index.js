import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';

export function ToastContainer() {
  return (
    <Container>
      <ToastMessage text={'Default Toast'} />
      <ToastMessage text={'Success Toast'} type="success" />
      <ToastMessage text={'Error Toast'} type="danger" />
    </Container>
  );
}

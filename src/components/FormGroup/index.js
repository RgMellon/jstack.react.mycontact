import { Container } from './styles';

export function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {!!error && <small>{error}</small>}
    </Container>
  );
}

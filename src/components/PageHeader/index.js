import { Container } from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';

export function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="go back arrow" />
        <span>Voltar</span>
      </Link>

      <h1>{title}</h1>
    </Container>
  );
}

import { Button } from '../Button';
import { Container, Overlay, Footer } from './style';

export function Modal() {
  return (
    <Overlay>
      <Container>
        <h1> Titulo </h1>
        <p> Corpo normal</p>

        <Footer>
          <button className="cancel-button" type="button">
            Cancelar
          </button>
          <Button danger>Tetse</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

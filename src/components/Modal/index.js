import { Button } from '../Button';
import { Container, Overlay, Footer } from './style';
import ReactDOM from 'react-dom';

export function Modal() {
  return ReactDOM.createPortal(
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
    </Overlay>,
    document.getElementById('modal-root')
  );
}

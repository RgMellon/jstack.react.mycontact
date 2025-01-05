import { Overlay, StyledSpinner } from './style';
import ReactDOM from 'react-dom';

export function Load() {
  return ReactDOM.createPortal(
    <Overlay>
      <StyledSpinner />
    </Overlay>,
    document.getElementById('load-root')
  );
}

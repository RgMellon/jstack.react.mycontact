import { Overlay, StyledSpinner } from './style';
import ReactDOM from 'react-dom';

export function Load({ isLoad }) {
  if (!isLoad) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <StyledSpinner />
    </Overlay>,
    document.getElementById('load-root')
  );
}

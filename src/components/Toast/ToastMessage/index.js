import { Container } from './styles';

import successIcon from '../../../assets/images/icons/check-circle.svg';
import dangerIcon from '../../../assets/images/icons/x-circle.svg';

export function ToastMessage({ text, type = 'default' }) {
  const status = {
    danger: dangerIcon,
    success: successIcon,
    default: undefined,
  };

  const currentIcon = status[type];

  return (
    <Container type={type}>
      {!!currentIcon && <img src={currentIcon} />}
      <strong>{text}</strong>
    </Container>
  );
}

import { Container } from './styles';

import successIcon from '../../../assets/images/icons/check-circle.svg';
import dangerIcon from '../../../assets/images/icons/x-circle.svg';
import { useEffect } from 'react';

export function ToastMessage({ text, type = 'default', onRemove }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleRemoveToast();
    }, 3000);

    return () => clearTimeout(timer);
  }, [handleRemoveToast]);

  const status = {
    danger: dangerIcon,
    success: successIcon,
    default: undefined,
  };

  const currentIcon = status[type];

  function handleRemoveToast() {
    onRemove();
  }

  return (
    <Container type={type} onClick={handleRemoveToast}>
      {!!currentIcon && <img src={currentIcon} />}
      <strong>{text}</strong>
    </Container>
  );
}

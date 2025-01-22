import { useEffect, useState } from 'react';
import { ToastMessage } from '../ToastMessage';
import { Container } from './styles';
import { toastEvent } from '../../../utils/toast';

export function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(),
          text,
          type,
        },
      ]);
    }

    toastEvent.on('addtoast', handleAddToast);

    return () => {
      toastEvent.removeListener('addtoast', handleAddToast);
    };
  }, []);

  function onRemove(id) {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id)
    );
  }

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
          onRemove={() => onRemove(message.id)}
        />
      ))}
    </Container>
  );
}

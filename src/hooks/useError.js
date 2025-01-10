import { useState } from 'react';
import { validateEmail } from '../utils/validateEmail';

export function useError() {
  const [errors, setErrors] = useState({});

  function handleEmailError({ field, message, value }) {
    setErrors((prevState) => {
      const newErrors = { ...prevState };

      if (value && !validateEmail(value)) {
        if (!newErrors?.[field]) {
          newErrors[field] = { message };
        }
      } else {
        delete newErrors[field];
      }

      return newErrors;
    });
  }

  function handleRequiredError({ field, message, value }) {
    setErrors((prevState) => {
      const newErrors = { ...prevState };

      if (!value) {
        newErrors[field] = { message };
      } else {
        delete newErrors[field];
      }

      return newErrors;
    });
  }

  return {
    errors,
    handleEmailError,
    handleRequiredError,
  };
}

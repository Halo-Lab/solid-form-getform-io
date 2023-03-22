import { validateName, validateEmail, validateMessage } from "./validate";

const formData = (
  name,
  email,
  message,
  setName,
  setEmail,
  setMessage,
  showName,
  showEmail,
  showMessage,
  nameError,
  emailError,
  messageError,
  setNameError,
  setEmailError,
  setMessageError
) => {
  const fields = {
    name: {
      value: name,
      error: nameError,
      fieldName: name,
      setValue: setName,
      setError: setNameError,
      validator: validateName,
      show: showName,
    },
    email: {
      value: email,
      error: emailError,
      fieldName: email,
      setValue: setEmail,
      setError: setEmailError,
      validator: validateEmail,
      show: showEmail,
    },
    message: {
      value: message,
      error: messageError,
      fieldName: message,
      setValue: setMessage,
      setError: setMessageError,
      validator: validateMessage,
      show: showMessage,
    },
  };

  return fields;
};

export default formData;

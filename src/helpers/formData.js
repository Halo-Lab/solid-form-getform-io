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
      component: "Input",
      id: "name",
      label: "Your Name",
      placeholder: "Your Name",
      value: name,
      error: nameError,
      fieldName: name,
      setValue: setName,
      setError: setNameError,
      validator: validateName,
      show: showName,
    },
    email: {
      component: "Input",
      id: "email",
      label: "Email Address",
      placeholder: "Email Address",
      value: email,
      error: emailError,
      fieldName: email,
      setValue: setEmail,
      setError: setEmailError,
      validator: validateEmail,
      show: showEmail,
    },
    message: {
      component: "Textarea",
      id: "message",
      label: "Message",
      placeholder: "Message",
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

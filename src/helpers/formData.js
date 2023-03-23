import { createSignal } from "solid-js";
import { validateName, validateEmail, validateMessage } from "./validate";

const formData = (showName, showEmail, showMessage) => {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [nameError, setNameError] = createSignal("");
  const [emailError, setEmailError] = createSignal("");
  const [messageError, setMessageError] = createSignal("");

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

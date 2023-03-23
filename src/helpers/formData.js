import { createSignal } from "solid-js";
import { validateName, validateEmail, validateMessage } from "./validate";

const formData = (showName, showEmail, showMessage) => {
  const fields = {
    name: {
      component: "Input",
      id: "name",
      label: "Your Name",
      placeholder: "Your Name",
      value: "",
      error: "",
      setValue: () => {},
      setError: () => {},
      validator: validateName,
      show: showName,
    },
    email: {
      component: "Input",
      id: "email",
      label: "Email Address",
      placeholder: "Email Address",
      value: "",
      error: "",
      setValue: () => {},
      setError: () => {},
      validator: validateEmail,
      show: showEmail,
    },
    message: {
      component: "Textarea",
      id: "message",
      label: "Message",
      placeholder: "Message",
      value: "",
      error: "",
      setValue: () => {},
      setError: () => {},
      validator: validateMessage,
      show: showMessage,
    },
  };

  Object.keys(fields).forEach((key) => {
    const [value, setValue] = createSignal(fields[key].value);
    const [error, setError] = createSignal(fields[key].error);

    fields[key] = {
      ...fields[key],
      value,
      setValue,
      error,
      setError,
    };
  });

  return fields;
};

export default formData;

import { createSignal } from "solid-js";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import styles from "./Form.module.css";
import handleSubmit from "../helpers/handleSubmit";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "../helpers/validate";

const Form = ({
  getFormID,
  showName = true,
  showEmail = true,
  showMessage = true,
  onFormSubmit = null,
}) => {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [nameError, setNameError] = createSignal("");
  const [emailError, setEmailError] = createSignal("");
  const [messageError, setMessageError] = createSignal("");

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

  const handleBlur = (setError, validate, field) => {
    const error = validate(field());
    setError(error);
  };

  const handleInputChange = (e, setValue, setError) => {
    setValue(e.target.value);
    setError("");
  };

  return (
    <form
      action={getFormID}
      method="POST"
      onSubmit={(event) => handleSubmit(event, fields, getFormID, onFormSubmit)}
      class={styles.form}
      noValidate
    >
      {showName && (
        <Input
          id="name"
          label="Your Name"
          placeholder="Your Name"
          value={name}
          isError={nameError}
          onInput={(e) => handleInputChange(e, setName, setNameError)}
          onBlur={() => handleBlur(setNameError, validateName, name)}
        />
      )}
      {showEmail && (
        <Input
          id="email"
          label="Email Address"
          placeholder="Email Address"
          value={email}
          isError={emailError}
          onInput={(e) => handleInputChange(e, setEmail, setEmailError)}
          onBlur={() => handleBlur(setEmailError, validateEmail, email)}
        />
      )}
      {showMessage && (
        <Textarea
          id="message"
          label="Message"
          placeholder="Message"
          value={message}
          isError={messageError}
          onInput={(e) => handleInputChange(e, setMessage, setMessageError)}
          onBlur={() => handleBlur(setMessageError, validateMessage, message)}
        />
      )}
      <Button label="Send form" onClick={() => {}} />
    </form>
  );
};

export default Form;

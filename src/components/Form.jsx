import { createSignal } from "solid-js";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import styles from "./Form.module.css";
import handleSubmit from "../helpers/handleSubmit";
import { validateName, validateEmail, validateMessage } from "../helpers/validate";

const Form = ({
  getFormID,
  showName = true,
  showEmail = true,
  showMessage = true,
  onFormSubmit=null,
}) => {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [nameError, setNameError] = createSignal("");
  const [emailError, setEmailError] = createSignal("");
  const [messageError, setMessageError] = createSignal("");

  function handleNameBlur() {
    const nameError = validateName(name());
    setNameError(nameError);
  }

  function handleEmailBlur() {
    const emailError = validateEmail(email());
    setEmailError(emailError);
  }

  function handleMessageBlur() {
    const messageError = validateMessage(message());
    setMessageError(messageError);
  }

  return (
    <form
      action={getFormID}
      method="POST"
      onSubmit={(event) =>
        handleSubmit(
          event,
          name,
          email,
          message,
          getFormID,
          setName,
          setEmail,
          setMessage,
          showName,
          showEmail,
          showMessage,
          setNameError,
          setEmailError,
          setMessageError,
          onFormSubmit
        )
      }
      class={styles.form}
      noValidate
    >
      {showName && (
        <Input
          id="name"
          label="Your Name"
          placeholder="Your Name"
          value={name}
          onInput={(e) => setName(e.target.value)}
          isError={nameError}
          onBlur={handleNameBlur}
        />
      )}
      {showEmail && (
        <Input
          id="email"
          label="Email Address"
          placeholder="Email Address"
          value={email}
          onInput={(e) => setEmail(e.target.value)}
          isError={emailError}
          onBlur={handleEmailBlur}
        />
      )}
      {showMessage && (
        <Textarea
          id="message"
          label="Message"
          placeholder="Message"
          value={message}
          onInput={(e) => setMessage(e.target.value)}
          isError={messageError}
          onBlur={handleMessageBlur}
        />
      )}
      <Button label="Send form" onClick={() => {}} />
    </form>
  );
};

export default Form;

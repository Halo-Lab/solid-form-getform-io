import { createSignal } from "solid-js";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import styles from "./Form.module.css";
import { handleSubmit } from "../helpers/handleSubmit";

const Form = () => {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [nameError, setNameError] = createSignal("");
  const [emailError, setEmailError] = createSignal("");
  const [messageError, setMessageError] = createSignal("");

  function onSubmit(e) {
    handleSubmit(
      e,
      name,
      email,
      message,
      setName,
      setEmail,
      setMessage,
      setNameError,
      setEmailError,
      setMessageError
    );
  }

  return (
    <form
      action={import.meta.env.VITE_GETFORM_ID}
      method="POST"
      onSubmit={onSubmit}
      class={styles.form}
      noValidate
    >
      <h2 class={styles.title}>Fill out this form to contact us</h2>
      <Input
        id="name"
        label="Your Name"
        placeholder="Your Name"
        value={name}
        onInput={(e) => setName(e.target.value)}
        isError={nameError}
      />
      <Input
        id="email"
        label="Email Address"
        placeholder="Email Address"
        value={email}
        onInput={(e) => setEmail(e.target.value)}
        isError={emailError}
      />
      <Textarea
        id="message"
        label="Message"
        placeholder="Message"
        value={message}
        onInput={(e) => setMessage(e.target.value)}
        isError={messageError}
      />
      <Button label="Send form" onClick={() => {}} />
    </form>
  );
}

export default Form;

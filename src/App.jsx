import { createSignal } from "solid-js";

import styles from "./App.module.css";

function App() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");
  const [nameError, setNameError] = createSignal("");
  const [emailError, setEmailError] = createSignal("");
  const [messageError, setMessageError] = createSignal("");

  function handleSubmit(e) {
    e.preventDefault();

    // validate name
    const nameRegex = /^[a-zA-Z0-9_]{2,40}$/;
    if (!nameRegex.test(name())) {
      setNameError("Please enter a real name");
    } else {
      setNameError("");
    }

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email())) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }

    // validate message
    if (message().trim() === "") {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }

    if (nameError() === "" && emailError() === "" && messageError() === "") {
      // Send the form data to Getform
      fetch("https://getform.io/f/b0b64947-fd31-4bff-9ff3-11cae8d1157f", {
        method: "POST",
        body: JSON.stringify({
          name: name(),
          email: email(),
          message: message(),
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then(() => {
          // Clear the form fields
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => console.error("Error submitting form:", error));
    }
  }

  return (
    <form
      action="https://getform.io/f/b0b64947-fd31-4bff-9ff3-11cae8d1157f"
      method="POST"
      onSubmit={handleSubmit}
      class={styles.form}
      noValidate
    >
      <h2 class={styles.title}>Fill out this form to contact us</h2>
      <div class={nameError() ? styles.inputError : styles.input}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name()}
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div class={emailError() ? styles.inputError : styles.input}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          value={email()}
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class={messageError() ? styles.messageError : styles.message}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Message"
          value={message()}
          onInput={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" class={styles.button}>
        Send form
      </button>
    </form>
  );
}

export default App;

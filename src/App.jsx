import { createSignal } from "solid-js";

import styles from "./App.module.css";

function App() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name: name(), email: email(), message: message() });
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} class={styles.form}>
      <h2 class={styles.title}>Fill out this form to contact us</h2>
      <div class={styles.input}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name()}
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div class={styles.input}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          value={email()}
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class={styles.textarea}>
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

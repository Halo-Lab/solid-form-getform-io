import {
  validateName,
  validateEmail,
  validateMessage,
} from "./validate";

export function handleSubmit(
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
) {
  e.preventDefault();

  const nameError = validateName(name());
  setNameError(nameError);

  const emailError = validateEmail(email());
  setEmailError(emailError);

  const messageError = validateMessage(message());
  setMessageError(messageError);

  if (nameError === "" && emailError === "" && messageError === "") {
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
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error("Error submitting form:", error));
  }
}

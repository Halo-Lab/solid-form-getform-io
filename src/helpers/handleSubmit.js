import { validateName, validateEmail, validateMessage } from "./validate";

const handleSubmit = (
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
) => {
  event.preventDefault();

  let nameError, emailError, messageError;

  if (showName) {
    nameError = validateName(name());
    setNameError(nameError);
  }

  if (showEmail) {
    emailError = validateEmail(email());
    setEmailError(emailError);
  }

  if (showMessage) {
    messageError = validateMessage(message());
    setMessageError(messageError);
  }

  if (
    (!showName || nameError === "") &&
    (!showEmail || emailError === "") &&
    (!showMessage || messageError === "")
  ) {
    fetch(getFormID, {
      method: "POST",
      body: JSON.stringify({
        ...(showName && { name: name() }),
        ...(showEmail && { email: email() }),
        ...(showMessage && { message: message() }),
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error("Error submitting form:", error));
      if(onFormSubmit) {
        onFormSubmit();
      }
  }
}

export default handleSubmit;

export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z0-9_]{2,40}$/;
  return nameRegex.test(name) ? "" : "Please enter a real name";
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Please enter a valid email address";
}

export const validateMessage = (message) => {
  return message.trim() === "" ? "Message is required" : "";
}

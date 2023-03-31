export const validateName = (name) => {
  const nameRegex = /^[а-яА-Яa-zA-Z0-9_]{2,40}$/;
  return nameRegex.test(name) ? "" : "Please enter a real name";
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? "" : "Please enter a valid email address";
}

export const validateMessage = (message) => {
  return message.trim() === "" ? "Message is required" : "";
}

export const validateCheckbox = (value) => {
  return value ? "" : "This checkbox must be checked";
};

export const validateRadioGroup = (value) => {
  return value ? "" : "Please select an option";
};

export const validateSelect = (value) => {
  return value ? "" : "Please select an option";
};

export const validateFileInput = (value) => {
  const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
  if (!value) {
    return "Please select a file";
  } else if (value.size > 10000000) {
    return "File size must be less than 10MB";
  } else {
    const extension = value.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      return (
        "File type not allowed. Allowed types are: " +
        allowedExtensions.join(", ")
      );
    } else {
      return "";
    }
  }
};

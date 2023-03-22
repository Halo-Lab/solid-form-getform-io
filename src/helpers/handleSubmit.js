const handleSubmit = (
  event,
  fields,
  getFormID,
  onFormSubmit
) => {
  event.preventDefault();

  Object.entries(fields).forEach(([fieldName, field]) => {
    if (field.show) {
      const error = field.validator(field.fieldName());
      field.setError(error);
    }
  });
  const hasErrors = Object.values(fields).some((field) => field.error() !== "");
  
  if (!hasErrors) {
    const body = {};
    Object.entries(fields).forEach(([fieldName, field]) => {
      if (field.show) {
        body[fieldName] = field.value();
      }
    });
    fetch(getFormID, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        Object.values(fields).forEach((field) => field.setValue(""));
      })
      .catch((error) => console.error("Error submitting form:", error));

    if (onFormSubmit) {
      onFormSubmit();
    }
  }
};

export default handleSubmit;

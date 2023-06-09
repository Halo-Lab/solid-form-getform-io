import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import styles from "./Form.module.css";
import handleSubmit from "../helpers/handleSubmit";
import formData from "../helpers/formData";

const Form = ({
  getFormID,
  showName = true,
  showEmail = true,
  showMessage = true,
  onFormSubmit = null,
}) => {
  const fields = formData(showName, showEmail, showMessage);

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
      {Object.values(fields).map(
        ({
          component,
          id,
          value,
          label,
          placeholder,
          error,
          setValue,
          setError,
          validator,
          show,
        }) => {
          const InputComponent = component === "Input" ? Input : Textarea;
          if (!show) return;
          return (
            <InputComponent
              key={id}
              id={id}
              label={label}
              placeholder={placeholder}
              value={value}
              isError={error}
              onInput={(e) => handleInputChange(e, setValue, setError)}
              onBlur={() => handleBlur(setError, validator, value)}
            />
          );
        }
      )}
      <Button label="Send form" onClick={() => {}} />
    </form>
  );
};

export default Form;

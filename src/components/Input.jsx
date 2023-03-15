import styles from "./Form.module.css";

const Input = ({ id, label, placeholder, value, onInput, isError }) => {
  return (
    <div class={isError() ? styles.inputError : styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value()}
        onInput={onInput}
      />
    </div>
  );
};

export default Input;

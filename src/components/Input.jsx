import styles from "./Form.module.css";

const Input = ({ id, label, placeholder, value, onInput, onBlur, isError }) => {
  return (
    <div class={isError() ? styles.inputError : styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value()}
        onInput={onInput}
        onBlur={onBlur}
      />
      {isError() ? (
        <span class={styles.tooltip}>
          It seems like you filled in this field incorrectly. Please, fill in
          this field to continue
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;

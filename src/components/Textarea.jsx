import styles from "./Form.module.css";

const Textarea = ({ id, label, placeholder, value, onInput, isError }) => {
  return (
    <div class={isError() ? styles.messageError : styles.message}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value()}
        onInput={onInput}
      />
    </div>
  );
};

export default Textarea;

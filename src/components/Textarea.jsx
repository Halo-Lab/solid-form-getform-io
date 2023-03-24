import styles from "./Form.module.css";

const Textarea = ({ id, name, label, placeholder, value, onInput, onBlur, isError }) => {
  return (
    <div class={isError() ? styles.messageError : styles.message}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value()}
        onInput={onInput}
        onBlur={onBlur}
      />
      {isError() ? (
        <span class={styles.tooltip}>
          <span class={styles.tooltipIcon}></span>
          <span class={styles.tooltipText}>
            It seems like you filled in this field incorrectly. Please, fill in
            this field to continue
          </span>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Textarea;

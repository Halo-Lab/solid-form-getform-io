import styles from "./Form.module.css";

const Button = ({ label, onClick }) => (
  <div class={styles.buttonContainer}>
    <button type="submit" class={styles.button} onClick={onClick}>
      {label}
    </button>
  </div>
);

export default Button;

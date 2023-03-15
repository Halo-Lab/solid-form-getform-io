import styles from "./Form.module.css";

const Button = ({ label, onClick }) => (
  <button type="submit" class={styles.button} onClick={onClick}>
    {label}
  </button>
);

export default Button;

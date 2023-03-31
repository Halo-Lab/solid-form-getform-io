import { createSignal } from "solid-js";

const Checkbox = ({ id, label, checked, onInput }) => {
  const [isChecked, setIsChecked] = createSignal(checked);

  const handleInputChange = (e) => {
    setIsChecked(e.target.checked);
    onInput && onInput(e);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={isChecked()}
        onInput={handleInputChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;

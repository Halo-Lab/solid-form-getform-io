import { createSignal } from "solid-js";

const RadioGroup = ({ name, label, options, value, onInput }) => {
  const [selectedValue, setSelectedValue] = createSignal(value);

  const handleInputChange = (e) => {
    setSelectedValue(e.target.value);
    onInput && onInput(e);
  };

  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={selectedValue() === option.value}
            onInput={handleInputChange}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;

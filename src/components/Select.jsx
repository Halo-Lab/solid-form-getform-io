const Select = ({ id, label, options, value, onInput }) => {
  const handleInputChange = (e) => {
    onInput && onInput(e);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onInput={handleInputChange}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

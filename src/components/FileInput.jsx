const FileInput = ({ id, label, onInput }) => {
  const handleInputChange = (e) => {
    onInput && onInput(e);
  };

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="file" id={id} onInput={handleInputChange} />
    </div>
  );
};

export default FileInput;

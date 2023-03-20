import Form from "./components/Form";

const App = () => {
  
  function onFormSubmit() {
    console.log("Form submitted!");
  }

  return (
    <Form
      getFormID="https://getform.io/f/b0b64947-fd31-4bff-9ff3-11cae8d1157f"
      showName={true}
      showEmail={true}
      showMessage={true}
      onFormSubmit={onFormSubmit}
    />
  );
}

export default App;

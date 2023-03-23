import Form from "./components/Form";

const App = () => {
  
  function onFormSubmit() {
    console.log("Form submitted!");
  }

  return (
    <Form
      getFormID="" // yout get-form-id
      showName={true}
      showEmail={true}
      showMessage={true}
      onFormSubmit={onFormSubmit}
    />
  );
}

export default App;

import Form from "./components/Form";

const App = () => {
  
  function onFormSubmit() {
    console.log("Form submitted!");
  }

  return (
    <Form
      getFormID="https://getform.io/f/6f5dca58-a42e-4b16-9b3e-c0ad81631900"
      showName={true}
      showEmail={true}
      showMessage={true}
      onFormSubmit={onFormSubmit}
    />
  );
}

export default App;

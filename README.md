# Solid-form-getform-io
This is a form component built with Solid.js that allows you to easily create a form that submits data to a GetForm endpoint. The form has three fields: name (input type="text"), email (input type="email"), and message (textarea). You can choose which fields to display by passing props to the component.

## Installation
You can install the package using npm:

`npm install solid-form-solid-form-getform-io-io`

## Usage
To use the form component, you need to import it into your Solid.js application:

`import Form from 'solid-form-getform-io';`

You can then use the component in your application:

```js
<Form getFormID="your-getform-id" />
```

You need to provide your GetFormID as the getFormID prop.

By default, all three fields (name, email, and message) will be displayed in the form. If you want to display only specific fields, you can use the showName, showEmail, and showMessage props:

<Form getFormID="your-getform-id" showName={true} showEmail={false} showMessage={true} />


## Props
The following props are available for the form component:
- getFormID (required): Your GetFormID.
- showName (optional, default true): Whether to show the name field.
- showEmail (optional, default true): Whether to show the email field.
- showMessage (optional, default true): Whether to show the message field.
- onFormSubmit(optional, default null): Function that is executed when the form is submitted 

## Example
Here's an example of how to use the form component:

```js
import Form from 'solid-form-getform-io';

const App = () => {
  
  function onFormSubmit() {
    console.log("Form submitted!");
  }

  return (
    <Form
      getFormID="https://getform.io/f/your-getform-id"
      showName={true}
      showEmail={true}
      showMessage={false}
      onFormSubmit={onFormSubmit}
    />
  );
}
```


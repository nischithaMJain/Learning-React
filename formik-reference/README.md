#React Formik quick notes
*Formik is a small library that helps you with the 3 most annoying parts:
1.	Getting values in and out of form state
2.	Validation and error messages
3.	Handling form submission

##Installation
 `npm install formik --save`

*Formik is compatible with React15+ and works with ReactDOM and React native.
*Formik comes with a few extra components to make life easier and less verbose: `<Form />`, `<Field />`, and `<ErrorMessage />`. 
*They use React context to hook into the parent `<Formik />` state/methods.
*To work on validation, we use 3rd party library called YUP- fast runtime and small 
*Formik has a special config option / prop for Yup called validationSchema which will automatically transform Yup's validation errors into a pretty object whose keys match values and touched

##Installation
    `npm install yup –save`

`import {useFormik} from ‘formik’;`

*useFormik hook takes an object as a value
*inside useFormik, we can define initialValues, onSubmit
*The hook then returns to us a goodie bag of form state and helper methods in a variable.
*Methods:
 -handleSubmit
 -handleChange=> works on input
 -values

*We pass each of these to their respective Props 
*We reuse same handleChange for any input fields
*Id and name match the properties of initialValues 
*We access the values using the same name => email => formik.values.email

###Validation 
*HTML input validation(required, minlength, maxlength) has its own limitations- looks only in the browser, hard or immposible to show error messages 










const registerValidate = (values) => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'Required';
  }
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('password1')) {
    errors.password1 = 'Required';
  } else if (values.get('password1').length < 6) {
    errors.password1 = 'Must be at least 6 characters';
  }
  if (!values.get('password2')) {
    errors.password2 = 'Required';
  } else if (values.get('password1') !== values.get('password2')) {
    errors.password2 = 'Password does not match';
  }
  return errors;
};

export default registerValidate;

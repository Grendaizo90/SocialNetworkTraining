import { useFormik } from "formik";
import React from "react";

// Formik initials

const initialValues = {
  login: '',
  password: '',
  rememberMe: false
};

const onSubmit = (values) => {
  console.log('Form data:', values);
};

const validate = (values) => {
  let errors = {};
    
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

// Components

const LoginForm = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
  });

  // Атрибут name должен совпадать с value={formik.values.XXX}
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          placeholder={'Login'}
          name={'login'}
          onChange={formik.handleChange}
          value={formik.values.login} />
      </div>
      <div>
        <input
          placeholder={'Password'}
          name={'password'}
          onChange={formik.handleChange}
          value={formik.values.password} />
      </div>
      <div>
        <input
          name={'rememberMe'}
          type={'checkbox'}
          onChange={formik.handleChange}
          value={formik.values.rememberMe} /> remember me
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
};

const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
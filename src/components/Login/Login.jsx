import React from "react";
import { useFormik } from "formik";
import s from "./Login.module.css";

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

  if (!values.login) {
    errors.login = 'Required';
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
    validate
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.inputField}>
        <input
          placeholder={'Login'}
          name={'login'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login} />
          {formik.touched.login && formik.errors.login
            ? <div className={s.inputError}>{formik.errors.login}</div>
            : null}
      </div>
      <div className={s.inputField}>
        <input
          placeholder={'Password'}
          name={'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password} />
          {formik.touched.password && formik.errors.password
            ? <div className={s.inputError}>{formik.errors.password}</div>
            : null}
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
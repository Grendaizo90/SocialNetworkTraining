import React from "react";
import { useFormik } from "formik";
import s from "./Login.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

// Formik initials

const initialValues = {
  email: '',
  password: '',
  rememberMe: false
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.login = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

// Components

const LoginForm = (props) => {

  const formik = useFormik({
    initialValues,
    onSubmit: props.onSubmit,
    validate
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.inputField}>
        <input
          placeholder={'E-mail'}
          name={'email'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} />
        {formik.touched.email && formik.errors.email
          ? <div className={s.inputError}>{formik.errors.email}</div>
          : null}
      </div>
      <div className={s.inputField}>
        <input
          placeholder={'Password'}
          name={'password'}
          type={'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password} />
        {formik.touched.password && formik.errors.password
          ? <div className={s.inputError}>{formik.errors.password}</div>
          : null
        }
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

const Login = (props) => {
  const onSubmit = (values) => {
    props.login(values.email, values.password, values.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to='/profile' />
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth 
});

export default connect(mapStateToProps, { login })(Login);
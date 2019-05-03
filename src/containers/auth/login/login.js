import React, {memo} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import {loginFetch} from '../../../actions/userActions';

import styles from '../auth.scss';

const Login = ({handleSubmit, loginFetch}) => {
  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit(val => loginFetch(val))}>
        <div className={styles["form-field"]}>
          <label htmlFor="email">Логин</label>
          <Field name="email" component="input" type="text" required />
        </div>
        <div className={styles["form-field"]}>
          <label htmlFor="password">Пароль</label>
          <Field name="password" component="input" type="password" required />
        </div>
        <div className={styles["form-submit"]}>
          <button type="submit">Войти</button>
          <span>Ещё не зарегистрированы? <Link to="/register">Регистрация</Link></span>
        </div>
      </form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
      loginFetch: (payload) => dispatch(loginFetch(payload))
  };
};

const mapStateToProps = (state) => {
  return {
      isSet: state.user.isSet
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  memo,
  reduxForm({
    form: 'login-form'
  })
)(Login)
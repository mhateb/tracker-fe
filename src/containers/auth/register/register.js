import React, {memo} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm, Form } from 'redux-form';
import { Link } from 'react-router-dom';

import {registerFetch} from '../../../actions/userActions';

import styles from '../auth.scss';

const Register = ({registerFetch, handleSubmit}) => {
  return (
    <div className={styles["form-container"]}>
      <Form onSubmit={handleSubmit(val => registerFetch(val))}>
        <div className={styles["form-field"]}>
          <label htmlFor="username">Логин</label>
          <Field name="username" component="input" type="text" required />
        </div>
        <div className={styles["form-field"]}>
          <label htmlFor="email">E-mail</label>
          <Field name="email" component="input" type="email" required />
        </div>
        <div className={styles["form-field"]}>
          <label htmlFor="password">Пароль</label>
          <Field name="password" component="input" type="password" required />
        </div>
        <div className={styles["form-field"]}>
          <label htmlFor="confirmation">Повторите Пароль</label>
          <Field name="confirmation" component="input" type="password" required />
        </div>
        <div className={styles["form-submit"]}>
          <button type="submit" label="submit">Войти</button>
          <span>Уже зарегистрированы? <Link to="/login">Войти</Link></span>
        </div>
      </Form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
      registerFetch: (payload) => dispatch(registerFetch(payload))
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
    form: 'register-form'
  })
)(Register)


import React, {memo} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import {loginRequest} from '../../../actions/userActions';
import Loader from '../../../components/loader/loader';

import styles from '../auth.scss';

const Login = ({handleSubmit, loginRequest, loading}) => {
  return (
    <Loader isLoading={loading}>
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit(val => loginRequest(val))}>
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
    </Loader>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
      loginRequest: (payload) => dispatch(loginRequest(payload))
  };
};

const mapStateToProps = (state) => {
  return {
      isSet: state.user.isSet,
      loading: state.user.loading
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
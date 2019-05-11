import React, {memo} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import {registerRequest} from 'actions/userActions';
import Wrapper from 'components/wrapper/wrapper';

import styles from '../auth.scss';

const Register = ({registerRequest, handleSubmit, loading, isFail}) => {
  return (
    <Wrapper isLoading={loading} isFail={isFail}>
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit(val => registerRequest(val))}>
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
        </form>
      </div>
    </Wrapper>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
      registerRequest: (payload) => dispatch(registerRequest(payload))
  };
};

const mapStateToProps = (state) => {
  return {
      isSet: state.user.isSet,
      loading: state.user.loading,
      isFail: state.user.isFail
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


import React, {memo} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';

import {loginFetch} from '../../../actions/userActions';

import styles from '../auth.scss';

const Login = ({history}) => {
  return (
    <div className={styles["form-container"]}>
      <form>
        <div className={styles["form-field"]}>
          <label htmlFor="username">Логин</label>
          <Field name="username" component="input" type="text" required />
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
      fetchLogin: (payload) => dispatch(loginFetch(payload))
  };
};

const mapStateToProps = (state) => {
  return {
      isSet: state.user.isSet
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(
    withRouter(
      memo(
        reduxForm({
          form: 'login-form'
        })(Login))
      )
    );

import React, {memo} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';

import {registerFetch} from '../../../actions/userActions';

import styles from '../auth.scss';

const Register = ({history, fetchRegister, isSet}) => {
  return (
    <div className={styles["form-container"]}>
      <form>
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
          <button onClick={fetchRegister()} type="submit">Войти</button>
          <span>Уже зарегистрированы? <Link to="/login">Войти</Link></span>
        </div>
      </form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchRegister: (payload) => dispatch(registerFetch(payload))
  };
};

const mapStateToProps = (state) => {
  return {
      isSet: state.user.isSet
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(
    withRouter(
      memo(
        reduxForm({
          form: 'register-form'
        })(Register)
      )
    )
  );

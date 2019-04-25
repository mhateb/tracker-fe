import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import styles from '../auth.scss';

const Login = () => (
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
);

export default reduxForm({
  form: 'login-form'
})(Login);

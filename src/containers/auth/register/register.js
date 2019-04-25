import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import styles from '../auth.scss';

const Register = () => (
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
        <button type="submit">Войти</button>
        <span>Уже зарегистрированы? <Link to="/login">Войти</Link></span>
      </div>
    </form>
  </div>
);

export default reduxForm({
  form: 'register-form'
})(Register);

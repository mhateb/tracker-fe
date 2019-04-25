import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import styles from '../auth.scss';

const Forgot = () => (
  <div className={styles["form-container"]}>
    <form>
    <div className={styles["form-field"]}>
        <label htmlFor="email">E-mail</label>
        <Field name="email" component="input" type="email" required />
      </div>
      <div className={styles["form-submit"]}>
        <button type="submit">Отправить</button>
        <span>Ещё не зарегистрированы? <Link to="/register">Регистрация</Link></span>
      </div>
    </form>
  </div>
);

export default reduxForm({
  form: 'forgot-form'
})(Forgot);
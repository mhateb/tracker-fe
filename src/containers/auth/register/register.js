import React, {memo} from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import {registerRequest} from "actions/userActions";
import Wrapper from "components/wrapper/wrapper";
import Button from "components/button/button";

import styles from '../auth.scss';

const Register = ({registerRequest, handleSubmit, loading, isFail}) => {
  return (
    <Wrapper isLoading={loading} isFail={isFail}>
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit(val => registerRequest(val))}>
          <p className={styles["form-title"]}>Регистрация</p>
          <div className={styles["form-field"]}>
            <Field 
              name="username" 
              component="input" 
              type="text" 
              placeholder="Логин"
              required 
            />
          </div>
          <div className={styles["form-field"]}>
            <Field 
              name="email" 
              component="input" 
              type="email" 
              placeholder="Email"
              required 
            />
          </div>
          <div className={styles["form-field"]}>
            <Field 
              name="password" 
              component="input" 
              type="password" 
              placeholder="Пароль"
              required 
            />
          </div>
          <div className={styles["form-field"]}>
            <Field 
              name="confirmation" 
              component="input" 
              type="password" 
              placeholder="Повторите пароль"
              required 
            />
          </div>
          <div className={styles["controls"]}>
            <Button 
              color="yellow"
              width="100%"
            >
              Зарегистрироваться
            </Button>
          </div>
          <span className={styles["form-link"]}>
            Уже зарегистрированы? <Link to="/login">Войти</Link>
          </span>
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


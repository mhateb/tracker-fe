import React, {memo} from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import {loginRequest} from "actions/userActions";
import Wrapper from "components/wrapper/wrapper";
import Button from "components/button/button";

import styles from "../auth.scss";

const Login = ({handleSubmit, loginRequest, loading, isFail, textError}) => {
  return (
    <Wrapper isLoading={loading} isFail={isFail}>
      <div className={styles["form-container"]}>
        <form onSubmit={handleSubmit(val => loginRequest(val))}>
		      <p className={styles["form-title"]}>Войти</p>
          <div className={styles["form-field"]}>
            <Field 
              name="email"
              component="input" 
              type="text" 
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
          <div className={styles["controls"]}>
            <Button 
              color="yellow"
              width="100%"
            >
              Войти
            </Button>
          </div>
          <span className={styles["form-link"]}>
            Ещё не зарегистрированы? 
            <Link to="/register">Регистрация</Link>
          </span>
        </form>
      </div>
    </Wrapper>
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
      loading: state.user.loading,
      isFail: state.user.isFail,
      textError: state.user.textError
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

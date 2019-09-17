import React, { memo, useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
 
import {loginRequest} from "actions/userActions";
import Wrapper from "components/wrapper/wrapper";
import Button from "components/button/button";
import Input from "components/input/input";

import styles from "../auth.scss";

const Login = ({handleSubmit, loginRequest, loading, isFail, textError}) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  })

  const onChangeFormHandler = ({ target: { name, value } }) => {
    setFormValue((prev) => ({...prev, [name]: value}))
  }

  const onSubmitHandler = () => {
    console.log(formValue)
    loginRequest({...formValue})
  }

  return (
    <Wrapper isLoading={loading} isFail={isFail}>
      <div className={styles["form-container"]}>
        <form onSubmit={onSubmitHandler}>
		      <p className={styles["form-title"]}>Войти</p>
          <label className={styles["form-label"]}>Логин</label>
          <Input
            type="text"
            required 
            width="280px"
            name="email"
            value={formValue.email}
            onChange={onChangeFormHandler}
          />
          <label className={styles["form-label"]}>Пароль</label>
          <Input
            type="text"
            required 
            width="280px"
            name="password"
            value={formValue.password}
            onChange={onChangeFormHandler}
          />
          <div className={styles["controls"]}>
            <Button 
              color="yellow"
              width="295px"
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
  memo
)(Login)

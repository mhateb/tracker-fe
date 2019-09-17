import React, {memo, useState} from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

import {registerRequest} from "actions/userActions";
import Wrapper from "components/wrapper/wrapper";
import Button from "components/button/button";
import Input from "components/input/input";

import styles from '../auth.scss';

const Register = ({registerRequest, loading, isFail}) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    confirmation: ""
  })

  const onChangeFormHandler = ({ target: { name, value } }) => {
    setFormValue((prev) => ({...prev, [name]: value}))
  }

  const onSubmitHandler = () => {
    registerRequest({...formValue})
  }

  return (
    <Wrapper isLoading={loading} isFail={isFail}>
      <div className={styles["form-container"]}>
        <form onSubmit={onSubmitHandler} style={{ height: "450px" }}>
          <p className={styles["form-title"]}>Регистрация</p>
          <label className={styles["form-label"]}>Логин</label>
          <Input
            type="email"
            required 
            width="280px"
            name="email"
            onChange={onChangeFormHandler}
          />
          <label className={styles["form-label"]}>Пароль</label>
          <Input
            type="password"
            required 
            width="280px"
            name="password"
            onChange={onChangeFormHandler}
          />
          <label className={styles["form-label"]}>Повторите пароль</label>
          <Input
            type="password"
            required 
            width="280px"
            name="confirmation"
            onChange={onChangeFormHandler}
          />
          <div className={styles["controls"]}>
            <Button 
              color="yellow"
              width="295px"
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
  memo
)(Register)


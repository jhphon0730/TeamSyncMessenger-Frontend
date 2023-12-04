import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { CustomErrorDialog, CustomInfoDialog } from "../../../wailsjs/go/main/App"

import { userModels } from "../../models/user/user.models";
import styles from "../../styles/pages/user/login.module.css"
import logo from "../../assets/images/logo.png"

const LoginPage = () => {
  const [loginState, setLoginState] = React.useState<userModels.LoginUserModel>({
    username: "",
    password: "",
  })

  const ChangeLoginStateHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;

    setLoginState((prev) => {
      return {
        ...prev, [name]: value 
      }
    });
  };

  const SubmitLoginHandler = ( event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (loginState.username.trim().length == 0 || loginState.password.trim().length == 0) {
      CustomErrorDialog("모든 정보를 입력하세요.")
      return
    }
  };

  return (
    <Fragment>
      <form className={styles.login_container} onSubmit={SubmitLoginHandler}>
        <div className={styles.login_content}>
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
          />
          <p className={styles.login_text}>
            로그인하세요.
          </p>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="사용자명"
              name="username"
              className={styles.input}
              value={loginState.username}
              onChange={ChangeLoginStateHandler}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              className={styles.input}
              value={loginState.password}
              onChange={ChangeLoginStateHandler}
            />
          </div>
          <button type="submit" className={styles.login_button}>
            로그인
          </button>
          <div className={styles.signup_container}>
            <span>계정이 없으신가요?</span>
            <Link to="/user/register" className={styles.signup_link}>
              회원가입
            </Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default LoginPage;

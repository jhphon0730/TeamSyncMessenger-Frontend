import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import { userModels } from "../../models/user/user.models";
import styles from "../../styles/pages/user/login.module.css"
import logo from "../../assets/images/logo.png"

const RegisterPage = () => {
  const [registerState, setRegisterState] = React.useState<userModels.RegisterUserModel>({
    username: "",
    password: "",
    password_check: "",
    email: "",
  })

  const ChangeRegisterStateHandler = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = event.target;

    setRegisterState((prev) => {
      return {
        ...prev, [name]: value 
      }
    });
  };

  const SubmitLoginHandler = ( event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(registerState);
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
            회원가입하세요.
          </p>
          <div className={styles.input_container}>
            <input
              type="text"
              placeholder="사용자명"
              name="username"
              className={styles.input}
              value={registerState.username}
              onChange={ChangeRegisterStateHandler}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="password"
              className={styles.input}
              value={registerState.password}
              onChange={ChangeRegisterStateHandler}
            />
            <input
              type="password"
              placeholder="비밀번호 확인 재입력"
              name="password_check"
              className={styles.input}
              value={registerState.password_check}
              onChange={ChangeRegisterStateHandler}
            />
            <input
              type="email"
              placeholder="이메일"
              name="email"
              className={styles.input}
              value={registerState.email}
              onChange={ChangeRegisterStateHandler}
            />
          </div>
          <button type="submit" className={styles.login_button}>
            회원가입
          </button>
          <div className={styles.signup_container}>
            <span>이미 계정이 있으신가요?</span>
            <Link to="/user/login" className={styles.signup_link}>
              로그인
            </Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default RegisterPage;

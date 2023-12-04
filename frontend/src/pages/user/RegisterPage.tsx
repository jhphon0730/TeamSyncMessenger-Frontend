import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/pages/user/login.module.css"
import logo from "../../assets/images/logo.png"

const RegisterPage = () => {
  const handleSignUp = () => {
    console.log("회원가입 버튼이 클릭되었습니다.");
  };

  return (
    <Fragment>
      <form className={styles.login_container}>
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
              className={styles.input}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="비밀번호 확인 재입력"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="이메일"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.login_button} onClick={handleSignUp}>
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

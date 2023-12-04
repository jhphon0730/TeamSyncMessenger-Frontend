import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/pages/user/login.module.css"

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    console.log("로그인 버튼이 클릭되었습니다.");
  };

  return (
    <Fragment>
      <div className={styles.login_container}>
        <div className={styles.login_content}>
          <p className={styles.login_text}>
            로그인하세요.
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
          </div>
          <button className={styles.login_button} onClick={handleLogin}>
            로그인
          </button>
          <div className={styles.signup_container}>
            <span>계정이 없으신가요?</span>
            <Link to="/signup" className={styles.signup_link}>
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;

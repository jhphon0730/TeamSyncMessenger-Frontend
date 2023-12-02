import React from "react";
import { Fragment } from "react";

import styles from "../../styles/pages/user/login.module.css"

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    console.log("로그인 버튼이 클릭되었습니다.");
  };

  return (
    <Fragment>
      <div className={styles.telegram_login_container}>
        <div className={styles.telegram_login_content}>
          <p className={styles.telegram_login_text}>
            로그인하세요.
          </p>
          <button className={styles.telegram_login_button} onClick={handleLogin}>
            로그인
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginPage;

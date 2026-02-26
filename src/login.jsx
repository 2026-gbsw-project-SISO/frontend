import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import idIcon from "./assets/images/1.png";
import pwIcon from "./assets/images/2.png";
import backArrowImg from "./assets/images/3.png";

export default function Login() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (loginId.trim() === "" || password.trim() === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username: loginId,
        password: password,
      });

      const token = response.data.token;
      localStorage.setItem("accessToken", token);

      alert("로그인 성공!");
      navigate("/dashboard");
    } catch (error) {
      console.error("로그인 에러:", error);
      alert("로그인 실패: 아이디 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className="login-container">
      <div className="back-arrow" onClick={() => navigate("/")}>
        <img src={backArrowImg} alt="뒤로가기" className="back-arrow-img" />
      </div>

      <h1 className="main-title">ON-Gil</h1>

      <div className="input-field">
        <div className="icon-circle">
          <img src={idIcon} alt="ID" className="field-icon" />
        </div>
        <input
          type="text"
          placeholder="ID"
          className="text-input"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
      </div>

      <div className="input-field">
        <div className="icon-circle">
          <img src={pwIcon} alt="PW" className="field-icon" />
        </div>
        <input
          type="password"
          placeholder="PW"
          className="text-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
      </div>

      <button className="login-button" onClick={handleLogin}>
        <span className="login-text">로그인</span>
      </button>
    </div>
  );
}

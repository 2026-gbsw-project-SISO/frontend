import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

import idIcon from "./assets/images/1.png";
import pwIcon from "./assets/images/2.png";
import backArrowImg from "./assets/images/3.png";

export default function LoginView() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    if (id.trim() === "" || pw.trim() === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    console.log("로그인 시도:", id);
    navigate("/dashboard");
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
          value={id}
          onChange={(e) => setId(e.target.value)}
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
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
      </div>

      <button className="login-button" onClick={handleLogin}>
        <span className="login-text">로그인</span>
      </button>
    </div>
  );
}

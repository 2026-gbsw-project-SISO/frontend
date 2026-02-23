import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CommonVerify.css";
import backArrowImg from "./assets/images/3.png";
import emailIconImg from "./assets/images/8.png";

export default function CommonVerify() {
  const navigate = useNavigate();
  const location = useLocation();
  const { nextPath } = location.state || { nextPath: "/login" };

  return (
    <div className="verify-root">
      <img
        src={backArrowImg}
        className="back-icon-top flipped"
        onClick={() => navigate(-1)}
        alt="back"
      />
      <div className="verify-container">
        <h1 className="logo-text-v2">ON-Gil</h1>
        <div className="input-group-v2">
          <div className="input-box-v2">
            <div className="icon-circle-v2">
              <img src={emailIconImg} className="inner-icon" alt="email" />
            </div>
            <input type="text" placeholder="Email" className="field-input" />
            <button className="verify-btn-inline">인증요청</button>
          </div>
          <div className="input-box-v2">
            <div className="icon-circle-v2">
              <img src={emailIconImg} className="inner-icon" alt="code" />
            </div>
            <input type="text" placeholder="인증번호" className="field-input" />
            <button className="verify-btn-inline wide">인증번호 확인</button>
          </div>
        </div>
        <button className="final-next-btn" onClick={() => navigate(nextPath)}>
          다음
        </button>
      </div>
    </div>
  );
}

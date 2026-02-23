import React from "react";
import { useNavigate } from "react-router-dom";
import "./NameChange.css";
import backArrowImg from "./assets/images/3.png";
import nameIconImg from "./assets/images/4.png";

export default function NameChange() {
  const navigate = useNavigate();

  return (
    <div className="name-change-root">
      <img
        src={backArrowImg}
        alt="back"
        className="back-icon-top"
        onClick={() => navigate(-1)}
      />

      <div className="name-change-container">
        <h1 className="logo-text">ON-Gil</h1>
        <div className="input-group">
          <div className="input-box">
            <div className="icon-wrapper">
              <img src={nameIconImg} alt="name" className="input-icon" />
            </div>
            <input type="text" placeholder="NAME" className="main-input" />
          </div>
        </div>

        <button
          className="next-action-btn"
          style={{ color: "#000000" }}
          onClick={() => {
            alert("이름이 변경되었습니다. 다시 로그인해주세요.");
            navigate("/login");
          }}
        >
          변경 완료
        </button>
      </div>
    </div>
  );
}

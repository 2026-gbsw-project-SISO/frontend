import React from "react";
import { useNavigate } from "react-router-dom";
import "./Option.css";
import Header from "./Header";
import profileIcon from "./assets/images/1.png";

export default function Option() {
  const navigate = useNavigate();

  const userId = "시골소녀";

  return (
    <div className="option-root">
      <Header />

      <main className="option-container">
        <div className="option-top-bar">
          <div className="profile-card">
            <div className="profile-icon-circle">
              <img src={profileIcon} alt="user" className="profile-img" />
            </div>
            <div className="profile-text">
              <span className="user-id">{userId}</span>
              <span className="fixed-text"> 님</span>
            </div>
          </div>

          <p className="policy-text">
            개인정보 처리방침, 위치 정보 이용 안내, 운전자 책임 고지, 알림
            정확성 안내 및 이용약관이 적용됩니다.
          </p>
        </div>

        <div className="card-group">
          <div className="option-card pink" onClick={() => navigate("/ai-log")}>
            <div className="card-title">
              AI 인식 결과
              <br />
              로그
            </div>
          </div>

          <div
            className="option-card orange"
            onClick={() => navigate("/event-log")}
          >
            <div className="card-title">
              사고, 위험
              <br />
              이벤트 로그
            </div>
          </div>

          <div
            className="option-card green"
            onClick={() => navigate("/system-setting")}
          >
            <div className="card-title">
              시스템
              <br />
              설정
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

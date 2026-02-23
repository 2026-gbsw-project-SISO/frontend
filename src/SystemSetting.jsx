import React from "react";
import { useNavigate } from "react-router-dom";
import "./SystemSetting.css";
import Header from "./Header";

export default function SystemSetting() {
  const navigate = useNavigate();

  const goVerify = (targetPath) => {
    navigate("/common-verify", { state: { nextPath: targetPath } });
  };

  return (
    <div className="system-setting-root">
      <Header />

      <div className="setting-body">
        <div className="button-wrapper">
          <div
            className="setting-button-card"
            onClick={() => goVerify("/id-change-2")}
          >
            <span className="setting-button-text">아이디 변경</span>
          </div>

          <div
            className="setting-button-card"
            onClick={() => goVerify("/pw-change")}
          >
            <span className="setting-button-text">비밀번호 변경</span>
          </div>

          <div
            className="setting-button-card"
            onClick={() => goVerify("/name-change")}
          >
            <span className="setting-button-text">이름 변경</span>
          </div>

          <div
            className="setting-button-card"
            onClick={() => goVerify("/addr-change")}
          >
            <span className="setting-button-text">주소 변경</span>
          </div>
        </div>
      </div>
    </div>
  );
}

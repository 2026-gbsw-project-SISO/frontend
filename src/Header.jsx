import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import menuIcon from "./assets/images/5.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="dash-header">
      {/* 🔥 로고 클릭하면 무조건 Dashboard("/") */}
      <div
        className="dash-logo"
        onClick={() => navigate("/dashboard")}
        style={{ cursor: "pointer" }}
      >
        ON-Gil
      </div>

      <div className="header-right">
        {/* 로그아웃 후 로그인 페이지로 가는 구조라면 "/" 유지 */}
        <button className="logout-btn" onClick={() => navigate("/")}>
          로그아웃
        </button>

        {/* 옵션 페이지 이동 */}
        <img
          src={menuIcon}
          alt="menu"
          className="menu-icon"
          onClick={() => navigate("/option")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </header>
  );
}

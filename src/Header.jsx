import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import menuIcon from "./assets/images/5.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="dash-header">
      <div
        className="dash-logo"
        onClick={() => navigate("/dashboard")}
        style={{ cursor: "pointer" }}
      >
        ON-Gil
      </div>

      <div className="header-right">
        <button className="logout-btn" onClick={() => navigate("/")}>
          로그아웃
        </button>

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

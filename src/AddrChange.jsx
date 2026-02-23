import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddrChange.css";
import backArrowImg from "./assets/images/3.png";
import addrIconImg from "./assets/images/4.png";

export default function AddrChange() {
  const navigate = useNavigate();

  return (
    <div className="change-root">
      <img
        src={backArrowImg}
        alt="back"
        className="back-icon-top"
        onClick={() => navigate(-1)}
      />

      <div className="change-container">
        <h1 className="logo-text-v2">ON-Gil</h1>

        <div className="input-box-large">
          <div className="icon-circle-v2">
            <img src={addrIconImg} alt="address icon" className="inner-icon" />
          </div>
          <input type="text" placeholder="ADDRESS" className="field-input" />
        </div>

        <button
          className="final-next-btn"
          onClick={() => {
            alert("주소가 변경되었습니다. 다시 로그인해주세요.");
            navigate("/login");
          }}
        >
          변경 완료
        </button>
      </div>
    </div>
  );
}

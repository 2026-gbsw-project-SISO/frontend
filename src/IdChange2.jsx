import React from "react";
import { useNavigate } from "react-router-dom";
import "./IdChange2.css";
import backArrowImg from "./assets/images/3.png";
import idIconImg from "./assets/images/1.png";

export default function IdChange2() {
  const navigate = useNavigate();

  const handleIdChange = () => {
    // 여기서 실제 아이디 변경 로직(API 호출 등)이 들어감

    alert("아이디가 변경되었습니다. 다시 로그인해주세요.");
    navigate("/login");
  };

  return (
    <div className="id-change-root">
      <img
        src={backArrowImg}
        alt="back"
        className="back-icon-top"
        onClick={() => navigate(-1)}
      />

      <div className="id-change-container">
        <h1 className="logo-text">ON-Gil</h1>

        <div className="input-group">
          <div className="input-box">
            <div className="icon-wrapper">
              <img src={idIconImg} alt="id" className="input-icon" />
            </div>
            <input type="text" placeholder="NEW ID" className="main-input" />
          </div>
        </div>

        <button
          className="next-action-btn"
          style={{ color: "#000000" }}
          onClick={handleIdChange}
        >
          변경 완료
        </button>
      </div>
    </div>
  );
}

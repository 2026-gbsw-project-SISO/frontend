import React, { useState } from "react";
import "./signupview.css"; // 전용 CSS 임포트
import { useNavigate } from "react-router-dom";

// 이미지 경로 (프로젝트 폴더 구조에 맞게 수정됨)
import nameIcon from "./assets/images/4.png";
import idIcon from "./assets/images/1.png";
import pwIcon from "./assets/images/2.png";
import backArrowImg from "./assets/images/3.png";

export default function SignupView() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleNext = () => {
    // 아이디가 'admin'이면 중복 메시지 표시
    if (userId === "admin") {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
      // 다음 단계인 주소 입력 페이지(/address)로 이동
      navigate("/address");
    }
  };

  return (
    <div className="signup-page-root">
      {/* 뒤로가기 버튼: 메인("/")으로 이동 */}
      <div className="signup-back-arrow" onClick={() => navigate("/")}>
        <img src={backArrowImg} alt="뒤로가기" className="signup-back-img" />
      </div>

      <h1 className="signup-title">ON-Gil</h1>

      {/* NAME 입력 필드 */}
      <div className="signup-input-field name-pos">
        <div className="signup-icon-circle">
          <img
            src={nameIcon}
            alt="NAME"
            className="signup-icon-img"
            style={{ transform: "rotate(-180deg)" }}
          />
        </div>
        <input type="text" placeholder="NAME" className="signup-text-input" />
      </div>

      {/* ID 입력 필드 */}
      <div className="signup-input-field id-pos">
        <div className="signup-icon-circle">
          <img src={idIcon} alt="ID" className="signup-icon-img" />
        </div>
        <input
          type="text"
          placeholder="ID"
          className="signup-text-input"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
            setIsDuplicate(false); // 타이핑 시 에러 메시지 초기화
          }}
        />
      </div>

      {/* 중복 메시지 표시 영역 */}
      {isDuplicate && (
        <div className="signup-error-msg">중복된 아이디입니다.</div>
      )}

      {/* PW 입력 필드 */}
      <div className="signup-input-field pw-pos">
        <div className="signup-icon-circle">
          <img src={pwIcon} alt="PW" className="signup-icon-img" />
        </div>
        <input type="password" placeholder="PW" className="signup-text-input" />
      </div>

      {/* 다음 단계 버튼 */}
      <button className="signup-submit-btn" onClick={handleNext}>
        <span className="signup-btn-text">다음</span>
      </button>
    </div>
  );
}

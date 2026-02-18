import React, { useState } from "react";
import "./signupview.css";
import { useNavigate } from "react-router-dom";

import nameIcon from "./assets/images/4.png";
import idIcon from "./assets/images/1.png";
import pwIcon from "./assets/images/2.png";
import backArrowImg from "./assets/images/3.png";

export default function SignupView() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleNext = () => {
    if (name.trim() === "") {
      alert("이름을 입력해주세요.");
      return;
    }
    if (userId.trim() === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (userId === "admin") {
      setIsDuplicate(true);
      alert("중복된 아이디입니다. 다른 아이디를 입력해주세요.");
    } else {
      setIsDuplicate(false);
      navigate("/address");
    }
  };

  return (
    <div className="signup-page-root">
      <div className="signup-back-arrow" onClick={() => navigate("/")}>
        <img src={backArrowImg} alt="뒤로가기" className="signup-back-img" />
      </div>

      <h1 className="signup-title">ON-Gil</h1>

      <div className="signup-input-field name-pos">
        <div className="signup-icon-circle">
          <img
            src={nameIcon}
            alt="NAME"
            className="signup-icon-img"
            style={{ transform: "rotate(-180deg)" }}
          />
        </div>
        <input
          type="text"
          placeholder="NAME"
          className="signup-text-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

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
            setIsDuplicate(false);
          }}
        />
      </div>

      {isDuplicate && (
        <div className="signup-error-msg">중복된 아이디입니다.</div>
      )}

      <div className="signup-input-field pw-pos">
        <div className="signup-icon-circle">
          <img src={pwIcon} alt="PW" className="signup-icon-img" />
        </div>
        <input
          type="password"
          placeholder="PW"
          className="signup-text-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="signup-submit-btn" onClick={handleNext}>
        <span className="signup-btn-text">다음</span>
      </button>
    </div>
  );
}

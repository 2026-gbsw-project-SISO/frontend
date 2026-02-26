import React, { useState } from "react";
import "./address.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import backArrowImg from "./assets/images/3.png";
import addressIcon from "./assets/images/4.png";

export default function Address() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleFinish = async () => {
    if (email.trim() === "") {
      setError(true);
      return;
    }

    try {
      const { id, username, password } = location.state || {};

      const response = await axios.post("http://localhost:8080/auth/signup", {
        id: id,
        username: username,
        password: password,
        email: email,
      });

      if (response.status === 200 || response.status === 201) {
        setError(false);
        alert("회원가입이 완료되었습니다! 로그인 해주세요.");
        navigate("/login");
      }
    } catch (error) {
      console.error("회원가입 최종 에러:", error);
      if (error.response && error.response.status === 409) {
        alert("이미 등록된 정보입니다.");
      } else {
        alert(
          "서버 연결 실패! 백엔드 친구에게 CORS 설정을 다시 확인해달라고 하세요.",
        );
      }
    }
  };

  return (
    <div className="address-page-root">
      <div className="address-back-arrow" onClick={() => navigate(-1)}>
        <img
          src={backArrowImg}
          alt="뒤로가기"
          className="address-back-img flipped"
        />
      </div>

      <h1 className="address-title">ON-Gil</h1>

      <div className="address-input-container">
        <div className="address-icon-box">
          <img src={addressIcon} alt="icon" className="address-icon-img" />
        </div>
        <input
          type="email"
          placeholder="EMAIL"
          className="address-input-field"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(false);
          }}
        />
      </div>

      {error && (
        <div className="address-error-text">이메일을 입력해주세요.</div>
      )}

      <button className="address-next-btn" onClick={handleFinish}>
        <span className="address-next-text">가입완료</span>
      </button>
    </div>
  );
}

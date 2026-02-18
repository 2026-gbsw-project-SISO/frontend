import React, { useState } from "react";
import "./address.css";
import { useNavigate } from "react-router-dom";
import backArrowImg from "./assets/images/3.png";
import addressIcon from "./assets/images/4.png";

export default function Address() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const handleNext = () => {
    if (address.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    alert("회원가입이 완료되었습니다!");
    navigate("/");
  };

  return (
    <div className="address-page-root">
      <div
        className="address-back-arrow"
        onClick={() => navigate("/signupview")}
      >
        <img src={backArrowImg} alt="뒤로가기" className="address-back-img" />
      </div>

      <h1 className="address-title">ON-Gil</h1>

      <div className="address-input-container">
        <div className="address-icon-box">
          <img src={addressIcon} alt="icon" className="address-icon-img" />
        </div>
        <input
          type="text"
          placeholder="ADDRESS"
          className="address-input-field"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            if (error) setError(false);
          }}
        />
      </div>

      {error && <div className="address-error-text">없는 주소지입니다.</div>}

      <button className="address-next-btn" onClick={handleNext}>
        <span className="address-next-text">다음</span>
      </button>
    </div>
  );
}

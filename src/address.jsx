import React, { useState } from "react";
import "./address.css";
import { useNavigate } from "react-router-dom";
import addressIcon from "./assets/images/1.png";
import backArrowImg from "./assets/images/3.png";

export default function Address() {
  const navigate = useNavigate();
  const [addressValue, setAddressValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleNext = () => {
    if (addressValue.trim() === "" || addressValue === "error") {
      setIsError(true);
    } else {
      setIsError(false);
      alert("회원가입이 완료되었습니다!");
    }
  };

  return (
    <div className="address-page-root">
      <div className="address-back-arrow" onClick={() => navigate(-1)}>
        <img src={backArrowImg} alt="뒤로가기" className="address-back-img" />
      </div>

      <h1 className="address-title">ON-Gil</h1>

      <div className="address-input-container">
        <div className="address-icon-box">
          <img src={addressIcon} alt="icon" className="address-icon-img" />
        </div>

        <input
          type="text"
          placeholder="Address"
          className="address-input-field"
          value={addressValue}
          onChange={(e) => {
            setAddressValue(e.target.value);
            setIsError(false);
          }}
        />
      </div>

      {isError && <div className="address-error-text">없는 주소지 입니다.</div>}

      <button className="address-next-btn" onClick={handleNext}>
        <span className="address-next-text">다음</span>
      </button>
    </div>
  );
}

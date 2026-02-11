import React from "react";
import Header from "./Header";
import "./Option.css";

export default function Option() {
  return (
    <div className="option-root">
      <Header />

      <div className="option-content">
        <h1>옵션 페이지</h1>
        <p>여기에 설정 옵션이 들어갑니다.</p>
      </div>
    </div>
  );
}

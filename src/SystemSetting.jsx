import React from "react";
import Header from "./Header";

export default function SystemSetting() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "50px", fontWeight: "700" }}>시스템 설정 창</h1>
      </div>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OnGil from "./OnGil";
import LoginView from "./Login";
import SignupView from "./Signupview";
import Address from "./Address";
import Dashboard from "./Dashboard";
import Option from "./Option"; // 🔥 옵션 페이지 추가했으면 필요

function App() {
  return (
    <Router>
      <Routes>
        {/* 시작 페이지 */}
        <Route path="/" element={<OnGil />} />

        {/* 로그인 */}
        <Route path="/login" element={<LoginView />} />

        {/* 회원가입 */}
        <Route path="/signupview" element={<SignupView />} />

        {/* 주소 입력 */}
        <Route path="/address" element={<Address />} />

        {/* 대시보드 */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 옵션 페이지 */}
        <Route path="/option" element={<Option />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OnGil from "./OnGil";
import LoginView from "./Login";
import SignupView from "./Signupview";
import Address from "./Address";
import Dashboard from "./Dashboard";
import Option from "./Option";

// 신규 페이지 임포트
import AiLog from "./AiLog";
import EventLog from "./EventLog";
import SystemSetting from "./SystemSetting";

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 화면 */}
        <Route path="/" element={<OnGil />} />

        {/* 로그인 및 회원가입 흐름 */}
        <Route path="/login" element={<LoginView />} />
        <Route path="/signupview" element={<SignupView />} />
        <Route path="/address" element={<Address />} />

        {/* 서비스 메인 화면 */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/option" element={<Option />} />

        {/* 옵션(설정) 카드별 상세 페이지 */}
        <Route path="/ai-log" element={<AiLog />} />
        <Route path="/event-log" element={<EventLog />} />
        <Route path="/system-setting" element={<SystemSetting />} />
      </Routes>
    </Router>
  );
}

export default App;

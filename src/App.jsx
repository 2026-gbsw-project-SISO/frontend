import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OnGil from "./OnGil";
import Login from "./Login";
import SignupView from "./signupview"; // SignupView.jsx -> signupview.jsx
import Dashboard from "./dashboard"; // 사이드바에 Dashboard.jsx로 되어있으면 그대로 유지
import Option from "./Option";
import SystemSetting from "./SystemSetting";

// 추가된 로그 관련 페이지
import Ailog from "./Ailog";
import EventLog from "./EventLog";

// 인증 및 정보 변경 페이지
import CommonVerify from "./CommonVerify";
import IdChange2 from "./IdChange2";
import PwChange from "./PwChange";
import NameChange from "./NameChange";
import AddrChange from "./AddrChange";

// [추가] 주소 입력 페이지
import Address from "./Address";

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 및 메인 경로 */}
        <Route path="/" element={<OnGil />} />
        <Route path="/login" element={<Login />} />
        {/* URL 경로(path)는 소문자로 쓰는 것이 관례이므로 유지합니다 */}
        <Route path="/signupview" element={<SignupView />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 메뉴 및 설정 */}
        <Route path="/option" element={<Option />} />
        <Route path="/system-setting" element={<SystemSetting />} />
        <Route path="/ai-log" element={<Ailog />} />
        <Route path="/event-log" element={<EventLog />} />

        {/* 정보 변경 프로세스 */}
        <Route path="/common-verify" element={<CommonVerify />} />
        <Route path="/id-change-2" element={<IdChange2 />} />
        <Route path="/pw-change" element={<PwChange />} />
        <Route path="/name-change" element={<NameChange />} />
        <Route path="/addr-change" element={<AddrChange />} />

        {/* [추가] 회원가입 후 주소 입력 경로 */}
        <Route path="/address" element={<Address />} />
      </Routes>
    </Router>
  );
}

export default App;

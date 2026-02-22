import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import OnGil from "./OnGil";
import LoginView from "./Login";
import SignupView from "./Signupview";
import Address from "./Address";
import Dashboard from "./Dashboard";
import Option from "./Option";

import AiLog from "./AiLog";
import EventLog from "./EventLog";
import SystemSetting from "./SystemSetting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnGil />} />

        <Route path="/login" element={<LoginView />} />
        <Route path="/signupview" element={<SignupView />} />
        <Route path="/address" element={<Address />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/option" element={<Option />} />

        <Route path="/ai-log" element={<AiLog />} />
        <Route path="/event-log" element={<EventLog />} />
        <Route path="/system-setting" element={<SystemSetting />} />
      </Routes>
    </Router>
  );
}

export default App;

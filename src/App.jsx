import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnGil from "./OnGil";
import LoginView from "./login";
import SignupView from "./signupview";
import Address from "./address";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnGil />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signupview" element={<SignupView />} />
        <Route path="/address" element={<Address />} />
      </Routes>
    </Router>
  );
}

export default App;

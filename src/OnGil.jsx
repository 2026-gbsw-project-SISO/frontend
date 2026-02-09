import { useNavigate } from "react-router-dom";
import "./OnGil.css";

export default function OnGil() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="title">ON-Gil</h1>

      <div className="button-group">
        <button className="btn" onClick={() => navigate("/login")}>
          로그인
        </button>
        <button className="btn" onClick={() => navigate("/signupview")}>
          회원가입
        </button>
      </div>
    </div>
  );
}

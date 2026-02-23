import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import totalIcon from "./assets/images/6.png";
import dangerIcon from "./assets/images/7.png";

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      <Header />

      <main className="dash-container">
        <section className="left-section">
          <div className="summary-wrapper">
            <div className="summary-card">
              <div className="card-left">
                <span className="card-label">전체 신호등</span>
                <span className="card-count green">34</span>
              </div>
              <img src={totalIcon} alt="total" className="card-img" />
            </div>

            <div className="summary-card">
              <div className="card-left">
                <span className="card-label">위험 신호등</span>
                <span className="card-count red">8</span>
              </div>
              <img
                src={dangerIcon}
                alt="danger"
                className="card-img danger-icon"
              />
            </div>
          </div>

          <div className="map-section">지도 로딩 중...</div>
        </section>

        <div className="vertical-line"></div>

        <section className="right-section">
          <div className="status-header">
            <span className="status-title">상태</span>
            <button className="view-all">View All</button>
          </div>

          <div className="status-list">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <div key={idx} className="status-item">
                <span className="item-name">마연군 신호등</span>
                <div
                  className={`status-badge ${
                    idx % 2 === 0 ? "safe" : "danger"
                  }`}
                >
                  {idx % 2 === 0 ? "안전" : "위험"}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

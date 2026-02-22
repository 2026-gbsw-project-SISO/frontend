import React, { useState } from "react";
import Header from "./Header";
import "./AiLog.css";

export default function AiLog() {
  const initialData = [
    { id: 1, target: "타요", date: "2026-01-01", confidence: "87%" },
    { id: 2, target: "로기", date: "2025-12-03", confidence: "64%" },
    { id: 3, target: "고양이", date: "2009-06-20", confidence: "93%" },
    { id: 4, target: "강아지", date: "2026-02-15", confidence: "78%" },
    { id: 5, target: "버스", date: "2026-02-20", confidence: "82%" },
    { id: 6, target: "사람", date: "2026-02-21", confidence: "99%" },
    { id: 7, target: "자전거", date: "2026-02-22", confidence: "75%" },
    { id: 8, target: "오토바이", date: "2026-02-23", confidence: "88%" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = () => {
    const filtered = initialData.filter((item) => {
      // 날짜 포맷 보정 (캘린더는 YYYY-MM-DD 형식으로 반환됨)
      const formattedSearchDate = searchDate.replace(/\./g, "-");
      const itemDate = item.date.replace(/\./g, "-");

      return (
        item.target.includes(searchTerm) &&
        (searchDate === "" || itemDate === formattedSearchDate)
      );
    });
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSearchDate("");
    setFilteredData(initialData);
  };

  return (
    <div className="ailog-root">
      <Header />

      <div className="ailog-content-wrapper">
        <div className="fixed-header-section">
          <div className="search-inputs">
            <input
              type="text"
              className="search-box"
              placeholder="대상 입력"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* 캘린더 입력창 */}
            <input
              type="date"
              className="search-box date-picker"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
          </div>

          <div className="action-buttons">
            <button className="btn-search" onClick={handleSearch}>
              검색
            </button>
            <button className="btn-reset" onClick={handleReset}>
              초기화
            </button>
          </div>

          <div className="line-divider"></div>

          <div className="list-column-header">
            <div className="col-target">대상</div>
            <div className="col-date">날짜</div>
            <div className="col-confidence">신뢰도</div>
          </div>
        </div>

        {/* 스크롤 영역 */}
        <div className="scrollable-list-area">
          {filteredData.map((item) => (
            <div key={item.id} className="log-row">
              <div className="col-target">
                <span className="inner-tag">{item.target}</span>
              </div>
              <div className="col-date">
                <span className="inner-tag date-tag">{item.date}</span>
              </div>
              <div className="col-confidence">
                <span className="inner-tag">{item.confidence}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

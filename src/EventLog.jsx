import React, { useState } from "react";
import Header from "./Header";
import "./EventLog.css";

export default function EventLog() {
  const initialData = [
    {
      id: 1,
      target: "타요",
      location: "영주역",
      date: "2026-02-22",
      type: "채민이 탄생일",
    },
    {
      id: 2,
      target: "로기",
      location: "의성마을뒷산",
      date: "2026-02-21",
      type: "차량 접근 위험",
    },
    {
      id: 3,
      target: "고양이",
      location: "경북소프트웨어마이스터고등학교",
      date: "2026-02-20",
      type: "우회전 차량 접근",
    },
    {
      id: 4,
      target: "강아지",
      location: "대구역",
      date: "2026-02-19",
      type: "보행자 주의",
    },
    {
      id: 5,
      target: "버스",
      location: "서울시청",
      date: "2026-02-18",
      type: "급정거 발생",
    },
    {
      id: 6,
      target: "택시",
      location: "강남역 11번 출구",
      date: "2026-02-17",
      type: "무단 횡단 감지",
    },
    {
      id: 7,
      target: "킥보드",
      location: "중앙공원 입구",
      date: "2026-02-16",
      type: "헬멧 미착용",
    },
    {
      id: 8,
      target: "트럭",
      location: "서해안고속도로",
      date: "2026-02-15",
      type: "졸음운전 의심",
    },
    {
      id: 9,
      target: "타요",
      location: "안동터미널",
      date: "2026-02-14",
      type: "신호 위반",
    },
    {
      id: 10,
      target: "로기",
      location: "영주시청 앞",
      date: "2026-02-13",
      type: "차선 이탈",
    },
    {
      id: 11,
      target: "오토바이",
      location: "해운대 해수욕장",
      date: "2026-02-12",
      type: "과속 감지",
    },
    {
      id: 12,
      target: "자전거",
      location: "한강 시민공원",
      date: "2026-02-11",
      type: "역주행 감지",
    },
    {
      id: 13,
      target: "사람",
      location: "스쿨존 사거리",
      date: "2026-02-10",
      type: "어린이 보호구역 주의",
    },
    {
      id: 14,
      target: "버스",
      location: "제주공항",
      date: "2026-02-09",
      type: "정류장 이탈",
    },
    {
      id: 15,
      target: "고양이",
      location: "주택가 골목길",
      date: "2026-02-08",
      type: "로드킬 위험",
    },
  ];

  const [searchTarget, setSearchTarget] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchType, setSearchType] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = () => {
    const filtered = initialData.filter((item) => {
      return (
        item.target.includes(searchTarget) &&
        item.location.includes(searchLocation) &&
        (searchDate === "" || item.date === searchDate) &&
        item.type.includes(searchType)
      );
    });
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setSearchTarget("");
    setSearchLocation("");
    setSearchDate("");
    setSearchType("");
    setFilteredData(initialData);
  };

  return (
    <div className="eventlog-root">
      <Header />

      <div className="eventlog-content-wrapper">
        <div className="fixed-header-section">
          <div className="search-row">
            <input
              type="text"
              className="search-box"
              placeholder="대상"
              value={searchTarget}
              onChange={(e) => setSearchTarget(e.target.value)}
            />
            <input
              type="text"
              className="search-box"
              placeholder="발생 위치"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <input
              type="date"
              className="search-box date-picker"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
            <input
              type="text"
              className="search-box"
              placeholder="사고 유형"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
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
            <div className="col-location">발생 위치</div>
            <div className="col-date">발생 날짜</div>
            <div className="col-type">사고 유형</div>
          </div>
        </div>

        <div className="scrollable-list-area">
          {filteredData.map((item) => (
            <div key={item.id} className="log-row">
              <div className="col-target">
                <span className="inner-tag">{item.target}</span>
              </div>
              <div className="col-location">
                <span className="inner-tag location-tag">{item.location}</span>
              </div>
              <div className="col-date">
                <span className="inner-tag">{item.date}</span>
              </div>
              <div className="col-type">
                <span className="inner-tag type-tag">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";

import "./profile.css";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

const mockProfile = {
  name: "홍길동",
  year: "25학번",
  department: "전기전자컴퓨터공학부",
  mbti: "ISTJ",
  gender: "남",
  isMatched: true, // ← 매칭 상태를 추가 (true: 매칭, false: 매칭 안됨)
  tags: [
    { label: "수면시간 : 12시 ~ 2시" },
    { label: "기상시간 : 8시 ~ 10시" },
    { label: "냉장고 : O" },
    { label: "추위 : X" },
    { label: "더위 : O" },
    { label: "코골이 : O" },
    { label: "흡연 : X" },
    { label: "정서 : 2주마다" },
  ],
  intro:
    "안녕하세요! 1년동안 같이 지낼 룸메이트를 구합니다. 저는 조용한 편이고, 게임을 좋아합니다. 잘 부탁드립니다 :) ".repeat(
      6
    ),
};

function RouteComponent() {
  const { name, year, department, mbti, gender, tags, intro, isMatched } =
    mockProfile;
  return (
    <div className="profile-root">
      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-row">
            <div className="profile-avatar">
              <div className="profile-avatar-icon" />
            </div>
            <div className="profile-main-info">
              <div className="profile-main-row">
                <span className="profile-name">{name}</span>
                <span className="profile-year">{year}</span>
                {/* 매칭 상태에 따라 텍스트 변경 */}
                <span className="profile-match">
                  {isMatched ? "매칭" : "매칭 안됨"}
                </span>
              </div>
              <div className="profile-department">{department}</div>
              <div className="profile-mbti-row">
                <span className="profile-mbti">{mbti}</span>
                <span className="profile-gender">{gender}</span>
              </div>
            </div>
          </div>
          <div className="profile-tags">
            {tags.map((tag, i) => (
              <span key={i} className="profile-tag">
                {tag.label}
              </span>
            ))}
          </div>
          <div className="profile-intro">{intro}</div>
          <div className="profile-chat-btn-row">
            <Link to="/chat" className="profile-chat-btn">
              채팅하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

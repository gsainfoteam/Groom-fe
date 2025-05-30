import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: index,
});

const users = [
  {
    nickname: "홍길동",
    studentNumber: 25,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "10시~12시",
    introduction:
      "안녕하세요! 1년동안 같이 지낼 룸메이트 구합니다. 저는 조용한 편이고, 게임을 좋아합니다. 잘 부탁드립니다 :)",
    available: false,
  },
  {
    nickname: "엄준식",
    studentNumber: 24,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "12시~2시",
    introduction:
      "세로로 엄. 준. 식. 을 완성하시는 분들께는 저의 사랑을 드리겠습니다!",
    available: true,
  },
  {
    nickname: "이상호",
    studentNumber: 23,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "12시~2시",
    introduction: "자 케인 죽을만큼 시작! 주글만큼 보고~~~",
    available: true,
  },
  {
    nickname: "김민지",
    studentNumber: 25,
    gender: "여",
    major: "전기전자컴퓨터공학부",
    sleepTime: "12시~2시",
    introduction: "안녕하세요",
    available: true,
  },
  {
    nickname: "정지수",
    studentNumber: 24,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "12시~2시",
    introduction:
      "안녕하세요. 저는 조용한 성격의 학생입니다. 룸메이트를 구합니다. 저는 청소를 잘 하고, 규칙적인 생활을 좋아합니다. 함께 지내실 분을 찾습니다.",
    available: true,
  },
  {
    nickname: "박지민",
    studentNumber: 23,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "12시~2시",
    introduction:
      "안녕하세요! 저는 룸메이트를 구하고 있습니다. 저는 조용한 성격이고, 청소를 잘 합니다. 함께 지내실 분을 찾습니다.",
    available: false,
  },
  {
    nickname: "홍길동",
    studentNumber: 25,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "10시~12시",
    introduction:
      "안녕하세요! 1년동안 같이 지낼 룸메이트 구합니다. 저는 조용한 편이고, 게임을 좋아합니다. 잘 부탁드립니다 :)",
    available: true,
  },
  {
    nickname: "홍길동",
    studentNumber: 25,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "10시~12시",
    introduction:
      "안녕하세요! 1년동안 같이 지낼 룸메이트 구합니다. 저는 조용한 편이고, 게임을 좋아합니다. 잘 부탁드립니다 :)",
    available: false,
  },
  {
    nickname: "아",
    studentNumber: 25,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "10시~12시",
    introduction:
      "안녕하세요! 1년동안 같이 지낼 룸메이트 구합니다. 저는 조용한 편이고, 게임을 좋아합니다. 잘 부탁드립니다 :)",
    available: true,
  },
  {
    nickname: "집",
    studentNumber: 25,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "10시~12시",
    introduction:
      "안녕하세요! 1년동안 같이 지낼 룸메이트 구합니다. 저는 조용한 편이고, 게임을 좋아합니다. 잘 부탁드립니다 :)",
    available: false,
  },
  {
    nickname: "갈",
    studentNumber: 25,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "10시~12시",
    introduction:
      "안녕하세요! 1년동안 같이 지낼 룸메이트 구합니다. 저는 조용한 편이고, 게임을 좋아합니다. 잘 부탁드립니다 :)",
    available: true,
  },
  {
    nickname: "래",
    studentNumber: 25,
    gender: "남",
    major: "전기전자컴퓨터공학부",
    sleepTime: "10시~12시",
    introduction:
      "안녕하세요! 1년동안 같이 지낼 룸메이트 구합니다. 저는 조용한 편이고, 게임을 좋아합니다. 잘 부탁드립니다 :)",
    available: true,
  },
];

function index() {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [search, setSearch] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [gender, setGender] = useState("성별");
  const [sleepTime, setSleepTime] = useState("수면시간");
  const [status, setStatus] = useState("마감여부");
  const [cold, setCold] = useState("추위");
  const [heat, setHeat] = useState("더위");
  const [snoring, setSnoring] = useState("코골이");
  const [smoking, setSmoking] = useState("흡연유무");
  const [cleaningCycle, setCleaningCycle] = useState("청소주기");
  const [refrigerator, setRefrigerator] = useState("냉장고유무");

  const filteredUsers = users.filter((user) => {
    return (
      (search === "" ||
        user.nickname.includes(search) ||
        user.introduction.includes(search)) &&
      (studentNumber === "" ||
        user.studentNumber.toString() === studentNumber) &&
      (gender === "성별" || user.gender === gender) &&
      (sleepTime === "수면시간" || user.sleepTime === sleepTime) &&
      (status === "마감여부" ||
        status === "전체" ||
        user.available === (status === "구하는 중"))
    );
  });

  return (
    <div className="min-h-screen bg-white px-6 py-4 gap-8 flex flex-col ">
      <div className="flex flex-col gap-2">
        <div className="flex justify-center gap-4 w-full ">
          <input
            type="text"
            placeholder="검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border max-h-10 px-3 py-2 rounded-xl text-sm"
          />
          <input
            type="text"
            placeholder="학번"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            className="border max-h-10 px-3 py-2 rounded-xl text-sm"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border max-h-10 px-3 py-2 rounded-xl text-sm"
          >
            <option>성별</option>
            <option>남</option>
            <option>여</option>
          </select>
          <select
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
            className="border max-h-10 px-3 py-2 rounded-xl text-sm"
          >
            <option>수면시간</option>
            <option>10시~12시</option>
            <option>12시~2시</option>
            <option>2시~4시</option>
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border max-h-10 px-3 py-2 rounded-xl text-sm"
          >
            <option>마감여부</option>
            <option>전체</option>
            <option>구하는 중</option>
            <option>마감</option>
          </select>
          <button
            className="border max-h-10 px-3 py-2 rounded-xl text-sm"
            onClick={toggleShowMore}
          >
            {showMore ? "접기..." : "더 보기..."}
          </button>
        </div>
        {showMore && (
          <div className="flex justify-center gap-4 w-full ">
            <select
              value={cold}
              onChange={(e) => setCold(e.target.value)}
              className="border max-h-10 px-3 py-2 rounded-xl text-sm"
            >
              <option>추위</option>
              <option>잘 탐</option>
              <option>안 탐</option>
            </select>
            <select
              value={heat}
              onChange={(e) => setHeat(e.target.value)}
              className="border max-h-10 px-3 py-2 rounded-xl text-sm"
            >
              <option>더위</option>
              <option>잘 탐</option>
              <option>안 탐</option>
            </select>
            <select
              value={snoring}
              onChange={(e) => setSnoring(e.target.value)}
              className="border max-h-10 px-3 py-2 rounded-xl text-sm"
            >
              <option>코골이</option>
              <option>잘 곪</option>
              <option>안 곪</option>
            </select>
            <select
              value={smoking}
              onChange={(e) => setSmoking(e.target.value)}
              className="border max-h-10 px-3 py-2 rounded-xl text-sm"
            >
              <option>흡연유무</option>
              <option>흡연자</option>
              <option>비흡연자</option>
            </select>
            <select
              value={cleaningCycle}
              onChange={(e) => setCleaningCycle(e.target.value)}
              className="border max-h-10 px-3 py-2 rounded-xl text-sm"
            >
              <option>청소주기</option>
              <option>1주마다</option>
              <option>2주마다</option>
              <option>3주마다</option>
              <option>1달이상</option>
            </select>
            <select
              value={refrigerator}
              onChange={(e) => setRefrigerator(e.target.value)}
              className="border max-h-10 px-3 py-2 rounded-xl text-sm"
            >
              <option>냉장고유무</option>
              <option>냉장고 O</option>
              <option>냉장고 X</option>
            </select>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {filteredUsers.map((user, idx) => (
          <Link
            to="/profile"
            key={idx}
            className={`rounded-xl p-4 ${
              user.available ? "bg-[#FFB3B3]" : "bg-gray-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 bg-white rounded-full border" />
              <div className="text-sm">
                <div>
                  {user.nickname} {user.studentNumber + "학번"}
                </div>
                <div className="text-xs text-gray-600">
                  {user.gender} {user.major}
                </div>
              </div>
            </div>
            <div className="text-xs mb-2">
              <div className="flex gap-2 mb-1">
                <span className="border rounded-full px-2 py-1 text-[12px] bg-white">
                  수면시간 : {user.sleepTime}
                </span>
              </div>
              <div>{user.introduction}</div>
            </div>
            {!user.available && (
              <div className="mt-2">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                  마감
                </span>
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className="gap-3 flex flex-col items-center justify-center mt-6">
        {/*추천 룸메찾기*/}
        <p className="text-2xl font-bold">누구랑 룸메할지 모르겠다고요?</p>
        <button className="bg-amber-300 p-4 rounded-xl text-4xl hover:bg-amber-500 transition-colors">
          추천 룸메 찾기
        </button>
      </div>
    </div>
  );
}

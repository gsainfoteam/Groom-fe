import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
});

const mockProfile = {
  name: "홍길동",
  year: "25학번",
  department: "전기전자컴퓨터공학부",
  mbti: "ISTJ",
  gender: "남",
  isMatched: true,
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
    <div className="bg-white min-h-screen pt-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-md px-8 py-9 flex flex-col gap-5">
          <div className="flex items-center gap-8">
            <div className="w-[90px] h-[90px] rounded-full bg-gray-200 flex items-center justify-center border border-gray-300 relative">
              <div
                className="w-[60px] h-[60px] rounded-full bg-gray-300 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='30' cy='22' rx='14' ry='13' fill='%23bdbdbd'/%3E%3Crect x='10' y='38' width='40' height='16' rx='8' fill='%23bdbdbd'/%3E%3C/svg%3E\")",
                }}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">{name}</span>
                <span className="text-gray-500 text-base">{year}</span>
                <span className="bg-red-300 text-white rounded-md px-2 py-0.5 text-sm font-medium ml-2">
                  {isMatched ? "매칭" : "매칭 안됨"}
                </span>
              </div>
              <div className="text-gray-700 text-base">{department}</div>
              <div className="text-sm text-gray-800 flex gap-3 mt-0.5">
                <span className="font-bold">{mbti}</span>
                <span>{gender}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-1">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-red-100 border border-gray-200 text-gray-800 rounded-lg px-3 py-1 text-sm font-medium"
              >
                {tag.label}
              </span>
            ))}
          </div>
          <div className="bg-red-200 rounded-xl px-4 py-5 text-gray-800 text-sm leading-7 whitespace-pre-line mb-2">
            {intro}
          </div>
          <div className="flex justify-center">
            <Link
              to="/chat"
              className="bg-yellow-100 text-gray-800 rounded-lg px-10 py-3 text-lg font-semibold shadow-sm hover:bg-yellow-200 transition"
            >
              채팅하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

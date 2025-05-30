import React, { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";

/* ---------- Types ---------- */
interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

interface TimeSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface YesNoSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface MBTISelectorProps {
  value: string[];
  onChange: (index: number, value: string) => void;
}

interface ProfileImageUploadProps {
  imageUrl: string;
  onChange: (imgUrl: string) => void;
}

interface HeaderProps {
  onBack: () => void;
  onChat: () => void;
  onProfile: () => void;
}

interface UserInfo {
  studentId: string;
  name: string;
  department: string;
  birthday: string;
  gender: string;
}

interface ProfileFormProps {
  isEdit: boolean;
  userInfo: UserInfo;
}

interface ProfileFormState {
  nickname: string;
  nationality: string;
  mbti: string[];
  snore: string;
  흡연: string;
  sleepTime: string;
  wakeTime: string;
  fridge: string;
  heatSensitive: string;
  coldSensitive: string;
  cleanFreq: string;
  bio: string;
  profileImage: string;
}

/* ---------- SelectField ---------- */
const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
}: SelectFieldProps) => (
  <label className="flex flex-col gap-1 text-base">
    {label}
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded px-2 py-1"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </label>
);

/* ---------- TimeSelect ---------- */
const TimeSelect = ({ label, name, value, onChange }: TimeSelectProps) => {
  const timeOptions = Array.from({ length: 24 }, (_, i) => ({
    value: `${i}~${i + 1}시`,
    label: `${i}시~${i + 1}시`,
  }));

  return (
    <label className="flex flex-col gap-1 text-base">
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-2 py-1"
      >
        <option value="">선택</option>
        {timeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

/* ---------- YesNoSelect ---------- */
const YesNoSelect = ({ label, name, value, onChange }: YesNoSelectProps) => {
  const options = [
    { value: "", label: "선택" },
    { value: "O", label: "O" },
    { value: "X", label: "X" },
  ];

  return (
    <label className="flex flex-col gap-1 text-base">
      {label}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-2 py-1"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};

/* ---------- MBTISelector ---------- */
const MBTISelector = ({ value, onChange }: MBTISelectorProps) => {
  const pairs = ["E/I", "S/N", "T/F", "J/P"];
  return (
    <div className="flex gap-2">
      {pairs.map((pair, index) => (
        <select
          key={index}
          value={value[index]}
          onChange={(e) => onChange(index, e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">선택</option>
          {pair.split("/").map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
};

/* ---------- ProfileImageUpload ---------- */
const ProfileImageUpload = ({
  imageUrl,
  onChange,
}: ProfileImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (typeof ev.target?.result === "string") {
          onChange(ev.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 mb-4">
      <img
        src={imageUrl || "/default-profile.png"}
        alt="프로필"
        className="w-24 h-24 rounded-full object-cover border border-gray-300 bg-gray-100"
      />
      <button
        type="button"
        className="bg-blue-500 text-white rounded px-3 py-1"
        onClick={() => inputRef.current?.click()}
      >
        이미지 선택
      </button>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

/* ---------- Header ---------- */
const Header = ({ onBack, onChat, onProfile }: HeaderProps) => (
  <header className="flex items-center gap-3 bg-gray-100 px-5 py-3 border-b border-gray-300">
    <button onClick={onBack}>뒤로</button>
    <span className="text-lg font-semibold">Profile Form</span>
    <div className="ml-auto flex gap-2">
      <button onClick={onChat}>채팅</button>
      <button onClick={onProfile}>My Profile</button>
    </div>
  </header>
);

/* ---------- 옵션 상수 ---------- */
const nationalityOptions: Option[] = [
  { value: "", label: "선택" },
  { value: "korean", label: "대한민국" },
  { value: "other", label: "기타" },
];
const fridgeOptions: Option[] = [
  { value: "", label: "선택" },
  { value: "yes", label: "있음" },
  { value: "no", label: "없음" },
];
const cleanFreqOptions: Option[] = [
  { value: "", label: "선택" },
  { value: "daily", label: "매일" },
  { value: "weekly", label: "주 1회" },
  { value: "monthly", label: "월 1회" },
];

/* ---------- 라우트 ---------- */
export const Route = createFileRoute("/myProfile")({
  component: ProfileFormRoute,
});

function ProfileFormRoute() {
  const userInfo: UserInfo = {
    studentId: "20230001",
    name: "홍길동",
    department: "컴퓨터공학과",
    birthday: "2000-01-01",
    gender: "남성",
  };

  return <ProfileForm isEdit={true} userInfo={userInfo} />;
}

/* ---------- ProfileForm ---------- */
function ProfileForm({ isEdit, userInfo }: ProfileFormProps) {
  const [form, setForm] = useState<ProfileFormState>({
    nickname: "",
    nationality: "",
    mbti: ["", "", "", ""],
    snore: "",
    흡연: "",
    sleepTime: "",
    wakeTime: "",
    fridge: "",
    heatSensitive: "",
    coldSensitive: "",
    cleanFreq: "",
    bio: "",
    profileImage: "",
  });

  const handleBack = () => window.history.back();
  const handleChat = () => alert("채팅 기능 연결 예정");
  const handleProfile = () => alert("My Profile 이동");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleMBTIChange = (index: number, value: string) => {
    const newMBTI = [...form.mbti];
    newMBTI[index] = value;
    setForm((prev) => ({ ...prev, mbti: newMBTI }));
  };

  const handleImageChange = (imgUrl: string) => {
    setForm((prev) => ({ ...prev, profileImage: imgUrl }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("제출된 정보:", form);
    alert(isEdit ? "수정 완료!" : "등록 완료!");
  };

  return (
    <>
      {/* <Header
        onBack={handleBack}
        onChat={handleChat}
        onProfile={handleProfile}
      /> */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-8 p-6 border border-gray-300 rounded-lg bg-white flex flex-col gap-4"
      >
        <div className="flex gap-6">
          <ProfileImageUpload
            imageUrl={form.profileImage}
            onChange={handleImageChange}
          />
          <div className="flex flex-col gap-2">
            <label className="flex flex-col gap-1">
              닉네임:
              <input
                name="nickname"
                value={form.nickname}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1"
              />
            </label>
            <p>학번: {userInfo?.studentId || "-"}</p>
            <p>이름: {userInfo?.name || "-"}</p>
            <p>학과: {userInfo?.department || "-"}</p>
            <p>생년월일: {userInfo?.birthday || "-"}</p>
            <p>성별: {userInfo?.gender || "-"}</p>
          </div>
        </div>

        <SelectField
          label="국적:"
          name="nationality"
          value={form.nationality}
          onChange={handleChange}
          options={nationalityOptions}
        />
        <label className="text-base">MBTI:</label>
        <MBTISelector value={form.mbti} onChange={handleMBTIChange} />
        <YesNoSelect
          label="코골이:"
          name="snore"
          value={form.snore}
          onChange={handleChange}
        />
        <YesNoSelect
          label="흡연:"
          name="흡연"
          value={form.흡연}
          onChange={handleChange}
        />
        <TimeSelect
          label="수면시간:"
          name="sleepTime"
          value={form.sleepTime}
          onChange={handleChange}
        />
        <TimeSelect
          label="기상시간:"
          name="wakeTime"
          value={form.wakeTime}
          onChange={handleChange}
        />
        <SelectField
          label="냉장고:"
          name="fridge"
          value={form.fridge}
          onChange={handleChange}
          options={fridgeOptions}
        />
        <YesNoSelect
          label="더위:"
          name="heatSensitive"
          value={form.heatSensitive}
          onChange={handleChange}
        />
        <YesNoSelect
          label="추위:"
          name="coldSensitive"
          value={form.coldSensitive}
          onChange={handleChange}
        />
        <SelectField
          label="청소 주기:"
          name="cleanFreq"
          value={form.cleanFreq}
          onChange={handleChange}
          options={cleanFreqOptions}
        />

        <label className="flex flex-col gap-1 text-base">
          본인을 소개해 주세요!
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={4}
            className="resize-none border border-gray-300 rounded px-2 py-1"
          />
        </label>

        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-yellow-300 text-white rounded text-lg"
        >
          {isEdit ? "수정하기" : "등록하기"}
        </button>
      </form>
    </>
  );
}

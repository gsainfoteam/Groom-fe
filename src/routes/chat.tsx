<<<<<<< HEAD
import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useRef, useEffect } from 'react';
=======
import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState, useRef, useEffect } from "react";
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))

interface ChatUser {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  lastMessageTimestamp: Date;
}

interface Message {
  id: number;
  username: string;
  message: string;
  timestamp: Date;
  isOwn: boolean;
}

interface ChatData {
  username: string;
  message: string;
  timestamp: Date;
}

function ChatApp() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
<<<<<<< HEAD
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatUsers, setChatUsers] = useState<ChatUser[]>([
    { 
      id: 1, 
      name: '엄준식', 
      lastMessage: '살아있다', 
      time: '오후 2:30', 
      unreadCount: 2,
      lastMessageTimestamp: new Date('2025-05-30T14:30:00')
    },
    { 
      id: 2, 
      name: '임기철', 
      lastMessage: 'Make GIST Great Again', 
      time: '오후 1:15',
      unreadCount: 0,
      lastMessageTimestamp: new Date('2025-05-30T13:15:00')
    },
    { 
      id: 3, 
      name: 'Naelon Musk Melon', 
      lastMessage: 'Mel-lu?', 
      time: '오전 11:20',
      lastMessageTimestamp: new Date('2025-05-30T11:20:00')
    },
  ]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const currentUser = '나';

  // 메모리 기반 메시지 저장소
  const [messageStore, setMessageStore] = useState<{ [key: number]: Message[] }>({
    1: [
      { id: 1, username: '엄준식', message: '엄', timestamp: new Date('2025-05-30T14:25:00'), isOwn: false },
      { id: 2, username: currentUser, message: '준', timestamp: new Date('2025-05-30T14:26:00'), isOwn: true },
      { id: 3, username: '엄준식', message: '식', timestamp: new Date('2025-05-30T14:28:00'), isOwn: false },
      { id: 4, username: currentUser, message: '은', timestamp: new Date('2025-05-30T14:29:00'), isOwn: true },
      { id: 5, username: '엄준식', message: '살아있다', timestamp: new Date('2025-05-30T14:30:00'), isOwn: false },
    ],
    2: [
      { id: 1, username: currentUser, message: '다음 계획이 어떻게 되나요?', timestamp: new Date('2025-05-30T13:10:00'), isOwn: true },
      { id: 2, username: '임기철', message: 'Make GIST Great Again', timestamp: new Date('2025-05-30T13:15:00'), isOwn: false },
    ],
    3: [
      { id: 1, username: 'Naelon Musk Melon', message: 'Mel-lu?', timestamp: new Date('2025-05-30T11:20:00'), isOwn: false },
=======
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatUsers, setChatUsers] = useState<ChatUser[]>([
    {
      id: 1,
      name: "엄준식",
      lastMessage: "살아있다",
      time: "오후 2:30",
      unreadCount: 2,
      lastMessageTimestamp: new Date("2025-05-30T14:30:00"),
    },
    {
      id: 2,
      name: "임기철",
      lastMessage: "Make GIST Great Again",
      time: "오후 1:15",
      unreadCount: 0,
      lastMessageTimestamp: new Date("2025-05-30T13:15:00"),
    },
    {
      id: 3,
      name: "Naelon Musk Melon",
      lastMessage: "Mel-lu?",
      time: "오전 11:20",
      lastMessageTimestamp: new Date("2025-05-30T11:20:00"),
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  const currentUser = "나";

  // 메모리 기반 메시지 저장소
  const [messageStore, setMessageStore] = useState<{
    [key: number]: Message[];
  }>({
    1: [
      {
        id: 1,
        username: "엄준식",
        message: "엄",
        timestamp: new Date("2025-05-30T14:25:00"),
        isOwn: false,
      },
      {
        id: 2,
        username: currentUser,
        message: "준",
        timestamp: new Date("2025-05-30T14:26:00"),
        isOwn: true,
      },
      {
        id: 3,
        username: "엄준식",
        message: "식",
        timestamp: new Date("2025-05-30T14:28:00"),
        isOwn: false,
      },
      {
        id: 4,
        username: currentUser,
        message: "은",
        timestamp: new Date("2025-05-30T14:29:00"),
        isOwn: true,
      },
      {
        id: 5,
        username: "엄준식",
        message: "살아있다",
        timestamp: new Date("2025-05-30T14:30:00"),
        isOwn: false,
      },
    ],
    2: [
      {
        id: 1,
        username: currentUser,
        message: "다음 계획이 어떻게 되나요?",
        timestamp: new Date("2025-05-30T13:10:00"),
        isOwn: true,
      },
      {
        id: 2,
        username: "임기철",
        message: "Make GIST Great Again",
        timestamp: new Date("2025-05-30T13:15:00"),
        isOwn: false,
      },
    ],
    3: [
      {
        id: 1,
        username: "Naelon Musk Melon",
        message: "Mel-lu?",
        timestamp: new Date("2025-05-30T11:20:00"),
        isOwn: false,
      },
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
    ],
  });

  // 시간 포맷팅 함수
  const formatTime = (date: Date): string => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
<<<<<<< HEAD
    const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    
    if (messageDate.getTime() === today.getTime()) {
      return date.toLocaleTimeString('ko-KR', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    } else if (messageDate.getTime() === today.getTime() - 24 * 60 * 60 * 1000) {
      return '어제';
    } else {
      return date.toLocaleDateString('ko-KR', { month: 'numeric', day: 'numeric' });
=======
    const messageDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    if (messageDate.getTime() === today.getTime()) {
      return date.toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } else if (
      messageDate.getTime() ===
      today.getTime() - 24 * 60 * 60 * 1000
    ) {
      return "어제";
    } else {
      return date.toLocaleDateString("ko-KR", {
        month: "numeric",
        day: "numeric",
      });
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
    }
  };

  // 백엔드 API 호출 시뮬레이션 함수들
  const fetchChatMessages = async (chatId: number): Promise<Message[]> => {
    return messageStore[chatId] || [];
  };

<<<<<<< HEAD
  const sendMessageToServer = async (chatId: number, message: string): Promise<Message> => {
=======
  const sendMessageToServer = async (
    chatId: number,
    message: string
  ): Promise<Message> => {
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
    return {
      id: Date.now(),
      username: currentUser,
      message,
      timestamp: new Date(),
<<<<<<< HEAD
      isOwn: true
=======
      isOwn: true,
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
    };
  };

  // 채팅 사용자 목록 업데이트 함수
<<<<<<< HEAD
  const updateChatUsersList = (chatId: number, lastMessage: string, timestamp: Date, isOwnMessage: boolean = false) => {
    setChatUsers(prevUsers => {
      const updatedUsers = prevUsers.map(user => {
        if (user.id === chatId) {
          const shouldNotIncreaseUnread = selectedChat === chatId || isOwnMessage;
          
=======
  const updateChatUsersList = (
    chatId: number,
    lastMessage: string,
    timestamp: Date,
    isOwnMessage: boolean = false
  ) => {
    setChatUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) => {
        if (user.id === chatId) {
          const shouldNotIncreaseUnread =
            selectedChat === chatId || isOwnMessage;

>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
          return {
            ...user,
            lastMessage,
            time: formatTime(timestamp),
            lastMessageTimestamp: timestamp,
<<<<<<< HEAD
            unreadCount: shouldNotIncreaseUnread ? 0 : (user.unreadCount || 0) + 1
=======
            unreadCount: shouldNotIncreaseUnread
              ? 0
              : (user.unreadCount || 0) + 1,
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
          };
        }
        return user;
      });
<<<<<<< HEAD
      
      return updatedUsers.sort((a, b) => b.lastMessageTimestamp.getTime() - a.lastMessageTimestamp.getTime());
=======

      return updatedUsers.sort(
        (a, b) =>
          b.lastMessageTimestamp.getTime() - a.lastMessageTimestamp.getTime()
      );
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
    });
  };

  // 새로운 채팅 데이터 추가 함수
  const addChatData = (chatId: number, chatData: ChatData) => {
    const newMessage: Message = {
      id: Date.now(),
      username: chatData.username,
      message: chatData.message,
      timestamp: chatData.timestamp,
<<<<<<< HEAD
      isOwn: chatData.username === currentUser
    };

    // 메모리 저장소 업데이트
    setMessageStore(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage]
=======
      isOwn: chatData.username === currentUser,
    };

    // 메모리 저장소 업데이트
    setMessageStore((prev) => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage],
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
    }));

    // 현재 선택된 채팅방이면 화면에 표시
    if (selectedChat === chatId) {
<<<<<<< HEAD
      setMessages(prevMessages => [...prevMessages, newMessage]);
    }

    // 채팅 사용자 목록 업데이트
    updateChatUsersList(chatId, chatData.message, chatData.timestamp, chatData.username === currentUser);
=======
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }

    // 채팅 사용자 목록 업데이트
    updateChatUsersList(
      chatId,
      chatData.message,
      chatData.timestamp,
      chatData.username === currentUser
    );
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
  };

  // 채팅방 선택 시 메시지 로드
  useEffect(() => {
    if (selectedChat) {
      const loadMessages = async () => {
        const chatMessages = await fetchChatMessages(selectedChat);
        setMessages(chatMessages);
      };
<<<<<<< HEAD
      
      loadMessages();
      
      // 읽지 않은 메시지 수 초기화
      setChatUsers(prevUsers => 
        prevUsers.map(user => 
=======

      loadMessages();

      // 읽지 않은 메시지 수 초기화
      setChatUsers((prevUsers) =>
        prevUsers.map((user) =>
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
          user.id === selectedChat ? { ...user, unreadCount: 0 } : user
        )
      );
    }
  }, [selectedChat, messageStore]);

  // 새 메시지 추가 시 스크롤 하단으로 이동
  useEffect(() => {
<<<<<<< HEAD
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
=======
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
  }, [messages]);

  // 메시지 전송 함수
  const handleSendMessage = async () => {
    if (newMessage.trim() && selectedChat) {
      try {
        const sentMessage = await sendMessageToServer(selectedChat, newMessage);
<<<<<<< HEAD
        
        const chatData: ChatData = {
          username: currentUser,
          message: newMessage,
          timestamp: sentMessage.timestamp
        };
        
        addChatData(selectedChat, chatData);
        setNewMessage('');
      } catch (error) {
        console.error('메시지 전송 실패:', error);
=======

        const chatData: ChatData = {
          username: currentUser,
          message: newMessage,
          timestamp: sentMessage.timestamp,
        };

        addChatData(selectedChat, chatData);
        setNewMessage("");
      } catch (error) {
        console.error("메시지 전송 실패:", error);
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
<<<<<<< HEAD
    if (e.key === 'Enter') {
=======
    if (e.key === "Enter") {
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
      handleSendMessage();
    }
  };

  const handleBackClick = () => {
    setSelectedChat(null);
  };

  // 현재 채팅방에 메시지 받기 시뮬레이션
  const simulateIncomingMessage = () => {
    if (selectedChat) {
      const incomingData: ChatData = {
<<<<<<< HEAD
        username: chatUsers.find(u => u.id === selectedChat)?.name || '상대방',
        message: '대화 상대에게 온 메세지',
        timestamp: new Date()
=======
        username:
          chatUsers.find((u) => u.id === selectedChat)?.name || "상대방",
        message: "대화 상대에게 온 메세지",
        timestamp: new Date(),
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
      };
      addChatData(selectedChat, incomingData);
    }
  };

  // 다른 채팅방에 메시지 받기 시뮬레이션
  const simulateOtherChatMessage = () => {
    const otherChatId = selectedChat === 1 ? 2 : 1;
    const incomingData: ChatData = {
<<<<<<< HEAD
      username: chatUsers.find(u => u.id === otherChatId)?.name || '상대방',
      message: '다른 상대에게 온 메세지',
      timestamp: new Date()
=======
      username: chatUsers.find((u) => u.id === otherChatId)?.name || "상대방",
      message: "다른 상대에게 온 메세지",
      timestamp: new Date(),
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
    };
    addChatData(otherChatId, incomingData);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 좌측 채팅 리스트 */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* 헤더 */}
        <div className="p-4 border-b border-gray-200 flex items-center">
          <button
            onClick={handleBackClick}
            className="mr-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
<<<<<<< HEAD
            <Link to="/index" className="profile-chat-btn"></Link>
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-800">채팅</h1>
        </div>
        
=======
            <Link to="/" className="profile-chat-btn">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
          </button>
          <h1 className="text-xl font-semibold text-gray-800">채팅</h1>
        </div>

>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
        {/* 채팅 리스트 - 스크롤 가능 */}
        <div className="flex-1 overflow-y-auto">
          {chatUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedChat(user.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
<<<<<<< HEAD
                selectedChat === user.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
=======
                selectedChat === user.id
                  ? "bg-blue-50 border-l-4 border-l-blue-500"
                  : ""
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user.name}
                    </p>
                    <span className="text-xs text-gray-500">{user.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-500 truncate">
                      {user.lastMessage}
                    </p>
<<<<<<< HEAD
                    {(user.unreadCount !== undefined && user.unreadCount > 0) && (
=======
                    {user.unreadCount !== undefined && user.unreadCount > 0 && (
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
                      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {user.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 우측 채팅창 */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* 채팅 헤더 */}
            <div className="bg-white p-4 border-b border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">
<<<<<<< HEAD
                      {chatUsers.find(u => u.id === selectedChat)?.name.charAt(0)}
=======
                      {chatUsers
                        .find((u) => u.id === selectedChat)
                        ?.name.charAt(0)}
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
<<<<<<< HEAD
                      {chatUsers.find(u => u.id === selectedChat)?.name}
=======
                      {chatUsers.find((u) => u.id === selectedChat)?.name}
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
                    </h2>
                    <p className="text-sm text-green-500">온라인</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={simulateIncomingMessage}
                    className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                  >
                    현재 채팅 메시지
                  </button>
                  <button
                    onClick={simulateOtherChatMessage}
                    className="px-3 py-1 text-xs bg-orange-200 text-orange-700 rounded hover:bg-orange-300 transition-colors"
                  >
                    다른 채팅 메시지
                  </button>
                </div>
              </div>
            </div>

            {/* 메시지 영역 - 스크롤 가능 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
<<<<<<< HEAD
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isOwn
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}>
=======
                  className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.isOwn
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}
                  >
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
                    {!message.isOwn && (
                      <p className="text-xs font-medium mb-1 text-gray-600">
                        {message.username}
                      </p>
                    )}
                    <p className="text-sm">{message.message}</p>
<<<<<<< HEAD
                    <p className={`text-xs mt-1 ${
                      message.isOwn ? 'text-blue-100' : 'text-gray-500'
                    }`}>
=======
                    <p
                      className={`text-xs mt-1 ${
                        message.isOwn ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* 메시지 입력 영역 */}
            <div className="bg-white p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="메시지를 입력하세요..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  전송
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Not Chatting 상태 */
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
<<<<<<< HEAD
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">채팅을 시작하세요</h3>
=======
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                채팅을 시작하세요
              </h3>
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))
              <p className="text-gray-500">좌측에서 대화상대를 선택해주세요</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/chat")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ChatApp />;
<<<<<<< HEAD
}
=======
}
>>>>>>> 6192d5b (feat: add up all the codes to one(only FE))

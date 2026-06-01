import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import './index.css';

const socket = io("http://localhost:5000");
const randomAvatar = () =>
  `https://avatars.dicebear.com/api/identicon/${Math.random().toString(36).substring(2,7)}.svg`;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [typingUser, setTypingUser] = useState("");
  const [username, setUsername] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const messagesEndRef = useRef(null);

  const [avatar] = useState(randomAvatar());
  const [userId] = useState(Date.now());

  // ✅ Socket listeners with cleanup
  useEffect(() => {
    const handleReceiveMessage = (msg) => setMessages(prev => [...prev, msg]);
    const handleTyping = ({ username: typingName, isTyping }) => {
      if (typingName !== username) {
        setTypingUser(isTyping ? typingName : "");
      }
    };

    socket.on("receiveMessage", handleReceiveMessage);
    socket.on("typing", handleTyping);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.off("typing", handleTyping);
    };
  }, [username]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingUser]);

  const handleSend = () => {
    if (!input && !image) return;

    const messageData = {
      text: input,
      image: image ? URL.createObjectURL(image) : null,
      id: Date.now(),
      avatar,
      userId,
      username,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    socket.emit("sendMessage", messageData);
    setInput("");
    setImage(null);
  };

  const handleTyping = (e) => {
    setInput(e.target.value);
    socket.emit("typing", { username, isTyping: e.target.value.length > 0 });
  };

  // ✅ Join screen
  if (!isJoined) {
    return (
      <div className="h-screen flex items-center justify-center bg-chat">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Enter Your Name</h2>
          <input
            type="text"
            className="border p-2 rounded w-full mb-4"
            placeholder="Your name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={() => setIsJoined(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Join Chat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-chat bg-chat-animate">
      <header className="bg-black bg-opacity-40 text-white p-4 text-center font-bold text-xl">
        Welcome {username}
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const isOwn = msg.userId === userId;

          return (
            <div key={msg.id} className={`flex ${isOwn ? "justify-end" : "justify-start"} items-end`}>
              {!isOwn && <img src={msg.avatar} className="w-8 h-8 rounded-full mr-2" />}

              <div className={`p-3 rounded-lg max-w-xs shadow break-words
                ${isOwn ? "bg-blue-600 text-white animate-slide-right" : "bg-white text-black animate-slide-left"}`}>
                <p className="text-xs font-bold">{msg.username}</p>
                {msg.text && <p>{msg.text}</p>}
                {msg.image && <img src={msg.image} className="mt-2 rounded animate-fade-in" />}
                <span className="text-xs block text-right">{msg.timestamp}</span>
              </div>

              {isOwn && <img src={avatar} className="w-8 h-8 rounded-full ml-2" />}
            </div>
          );
        })}

        {/* Typing Indicator */}
        {typingUser && (
          <div className="flex items-center space-x-2 mt-1">
            <img
              src="https://avatars.dicebear.com/api/identicon/seconduser.svg"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex bg-white p-2 rounded-lg shadow-lg space-x-1">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <span className="text-white text-sm italic">{typingUser} is typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 flex p-4 space-x-2 bg-white bg-opacity-95">
        <input
          type="text"
          className="flex-1 p-3 border rounded"
          placeholder="Type a message..."
          value={input}
          onChange={handleTyping}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border border-gray-300 rounded-lg p-2 bg-white"
        />

        <button
          onClick={handleSend}
          className="bg-purple-600 text-white p-3 rounded-full hover:scale-110 transition"
        >
          <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
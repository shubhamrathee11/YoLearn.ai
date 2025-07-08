import React from "react";
import self from "../assets/self.png";

const ChatMessages = ({ messages, companion }) => (
  <div className="flex flex-col gap-3 px-4 py-6 max-h-[600px] overflow-y-auto">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`flex items-start gap-3 ${
          msg.sender === "user" ? "self-end" : "self-start"
        }`}
      >
        <img
          src={msg.sender === "user" ? self : companion.avatar}
          alt={msg.sender === "user" ? "You" : companion.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div
            className={`px-2 py-2 rounded-xl shadow ${
              msg.sender === "user"
                ? "bg-blue-100 text-gray-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
          <div className="text-xs text-gray-400 mt-1 text-left">
            {msg.time}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ChatMessages;

import React from "react";
import { FaRegSmile, FaPaperclip, FaRegPaperPlane } from "react-icons/fa";

const ChatInput = ({ message, setMessage, onSend, onKeyDown }) => (
  <div className="flex justify-center w-full px-4 mb-38">
    <div className="flex items-center w-full max-w-[681px] h-[66px] rounded-[33px] px-6 border border-gray-300 gap-4 bg-white shadow-sm">
      <div className="flex items-center gap-3 text-gray-500 text-lg">
        <FaRegSmile className="cursor-pointer hover:text-gray-700" />
        <FaPaperclip className="cursor-pointer hover:text-gray-700" />
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={onKeyDown}
        className="flex-1 outline-none text-gray-700 text-[16px] bg-transparent"
      />
      <button
        onClick={onSend}
        className="bg-orange-400 h-[42px] w-[42px] pl-3 p-2 rounded-full text-white hover:bg-orange-500 transition"
      >
        <FaRegPaperPlane />
      </button>
    </div>
  </div>
);

export default ChatInput;

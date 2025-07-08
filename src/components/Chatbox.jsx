import React from "react";

const ChatBox = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center"
      style={{
        width: "502px",
        height: "360px",
        gap: "24px",
        marginTop: "219px",
        marginLeft: "134px",
      }}
    >
      <img
        src="https://i.imgur.com/zF6s192.png"
        alt="AI Avatar"
        className="w-[160px] h-[160px] rounded-full"
      />
      <p className="text-gray-600 font-medium text-lg">
        👋 Hey there! Ready to learn something new?
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
        Say Hi 👋
      </button>
    </div>
  );
};

export default ChatBox;

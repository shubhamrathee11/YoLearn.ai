import React from "react";

const EmptyState = ({ companion, onSayHi }) => (
  <div className="flex-1 flex items-center justify-center mt-[149px]">
    <div
      className="flex flex-col items-center text-center"
      style={{ width: "502px", height: "360px", gap: "24px" }}
    >
      <img
        src={companion.avatar}
        alt="AI Avatar"
        className="w-[200px] h-[200px] rounded-full object-cover"
      />
      <p className="text-gray-800 font-medium text-lg">
        👋 Hello there! Ready to learn something new? Start the conversation by saying hi or asking a question.
      </p>
      <button
        onClick={onSayHi}
        className="px-6 py-2 h-[54px] w-[135px] bg-blue-500 text-white text-[16px] rounded-lg hover:bg-blue-600"
      >
        Say Hi 👋
      </button>
    </div>
  </div>
);

export default EmptyState;

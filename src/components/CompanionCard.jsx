import React from "react";

const CompanionCard = ({ person, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer group relative flex items-center gap-3 p-4 border h-[144px] w-[236px] shadow-sm mb-3 rounded-xl overflow-hidden"
    style={{ borderColor: "#D7ECFA" }}
  >
    <img
      src={person.avatar}
      alt={person.name}
      className="w-[54px] h-[54px] object-cover rounded-md transform transition-transform duration-300 group-hover:scale-150"
    />
    <div>
      <div className="text-lg font-semibold text-gray-900">{person.name}</div>
      <div className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-xl inline-block">
        {person.role}
      </div>
    </div>
    <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-90 group-hover:top-[70%] transition-all duration-300 text-sm font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow">
      {person.name}
    </div>
  </div>
);

export default CompanionCard;

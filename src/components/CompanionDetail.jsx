import React from "react";
import { FaPhone, FaVideo } from "react-icons/fa";

const CompanionDetail = ({ selected }) => (
  <div
    className="p-4 border items-center rounded-xl h-[279px] shadow-sm mb-6"
    style={{ borderColor: "#D7ECFA" }}
  >
    <div className="flex items-center gap-3 mt-11 mb-2 group relative">
      <div className="relative">
        <img
          src={selected.avatar}
          alt={selected.name}
          className="w-[54px] h-[54px] rounded-lg object-cover transition-transform duration-300 group-hover:scale-[3]"
          style={{ zIndex: 10 }}
        />
        <div className="absolute top-[10%] left-6 transform -translate-x-1/2 -translate-y-6 opacity-0 group-hover:opacity-75 group-hover:top-[150%] transition-all duration-500 text-sm font-semibold text-gray-700 bg-white px-2 py-1 rounded shadow">
          {selected.name}
        </div>
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900">{selected.name}</div>
        <div className="text-xs text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full inline-block">
          {selected.role}
        </div>
      </div>
    </div>

    <p className="text-xs text-gray-500 mb-4">{selected.description}</p>

    <div className="flex gap-3">
      <button className="border rounded-lg text-blue-500 text-sm px-3 py-1 flex items-center gap-1 hover:bg-blue-50">
        <FaVideo /> Video Call
      </button>
      <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-lg flex items-center gap-1 hover:bg-blue-600">
        <FaPhone /> Call
      </button>
    </div>
  </div>
);

export default CompanionDetail;

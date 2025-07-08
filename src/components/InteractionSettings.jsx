import React from "react";
import { FaCog } from "react-icons/fa";

const InteractionSettings = () => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
      <FaCog /> Interaction Settings
    </h3>
    <div className="mb-3">
      <label className="block text-md text-gray-500 mb-1">Style</label>
      <select className="w-full border border-gray-300 rounded px-3 py-2 text-md">
        <option>Pick an option</option>
      </select>
    </div>

    <div className="mb-3">
      <label className="block text-md text-gray-500 mb-1">Pace</label>
      <select className="w-full border border-gray-300 rounded px-3 py-2 text-md">
        <option>Pick an option</option>
      </select>
    </div>
  </div>
);

export default InteractionSettings;

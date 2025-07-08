import React from "react";
import {
  FaRegLightbulb,
  FaQuestionCircle,
  FaBookOpen,
  FaChartBar,
} from "react-icons/fa";

const LearningTools = () => (
  <div style={{ width: "325px", height: "305px" }}>
    <h3 className="text-lg font-semibold text-gray-800 mb-3">Learning Tools</h3>
    <ul className="space-y-3 text-md text-gray-700 font-medium ml-2">
      <li className="flex h-[52px] items-center gap-2">
        <FaRegLightbulb className="text-blue-400" />
        Concept Coach
      </li>
      <li className="flex h-[52px] items-center gap-2">
        <FaQuestionCircle className="text-blue-400" />
        Practice Quiz
      </li>
      <li className="flex h-[52px] items-center gap-2">
        <FaBookOpen className="text-blue-400" />
        Study Notes
      </li>
      <li className="flex h-[52px] items-center gap-2">
        <FaChartBar className="text-blue-400" />
        Progress Tracker
      </li>
    </ul>
  </div>
);

export default LearningTools;

import React, { useState } from "react";
import CompanionCard from "./CompanionCard";
import CompanionDetail from "./CompanionDetail";
import LearningTools from "./LearningTools";
import InteractionSettings from "./InteractionSettings";

import {
  FaChevronLeft,
  FaChevronRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import alex from "../assets/alex.png";
import john from "../assets/john.jpg";
import katherine from "../assets/katherine.jpg";

const companions = {
  Alex: {
    name: "Alex Dagota",
    role: "Tutor",
    avatar: alex,
    description:
      "Friendly and patient tutor specializing in breaking down complex concepts into digestible pieces.",
  },
  John: {
    name: "John Mathews",
    role: "Coach",
    avatar: john,
    description:
      "Motivational coach helping you build focus, discipline and confidence to reach your goals.",
  },
  Katherine: {
    name: "Katherine Lane",
    role: "Buddy",
    avatar: katherine,
    description:
      "Casual learning buddy who keeps things light and helps you stay consistent and curious.",
  },
};

const ProfileSection = ({ selected, onSelect }) => {
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => setMobileOpen(!mobileOpen);

  const handleCardClick = (name) => {
    const selectedCompanion = companions[name];
    onSelect(selectedCompanion);
    setExpanded(true);
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="fixed top-20 right-4 z-50 md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 p-2 bg-white border border-gray-300 rounded shadow"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 right-0 z-40 bg-white px-4 pt-4 transition-transform duration-300 md:block ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
        style={{
          width: "316px",
          minHeight: "947px",
          borderLeft: "1px solid #D7ECFA",
        }}
      >
        {/* Toggle Button */}
        <div className="flex justify-start mb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded"
            style={{
              backgroundColor: expanded ? "#ECF6FD" : "#fff",
              border: "1px solid #D7ECFA",
            }}
          >
            {expanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>
        </div>

        {/* Stage 1 (Collapsed) */}
        {!expanded && (
          <>
            <div className="text-base font-medium text-gray-800 mb-4">
              Show Companion
            </div>
            {Object.entries(companions).map(([key, person]) => (
              <CompanionCard
                key={key}
                person={person}
                onClick={() => handleCardClick(key)}
              />
            ))}
          </>
        )}

        {/* Stage 2 (Expanded) */}
        {expanded && selected && (
          <>
            <CompanionDetail selected={selected} />
            <LearningTools />
            <InteractionSettings />
          </>
        )}
      </div>
    </>
  );
};

export default ProfileSection;

import React, { useState } from "react";
import {
  FaBook,
  FaChalkboardTeacher,
  FaPencilAlt,
  FaRedo,
  FaBrain,
  FaChartLine,
  FaStickyNote,
  FaUser,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon - mobile only */}
      {!open && (
        <div className="md:hidden fixed top-[80px] left-4 z-50">
          <FaBars
            className="text-2xl text-gray-800 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:static top-[70px] left-0 z-40 h-[947px] bg-white 
          w-[288px] border-r border-[#D7ECFA] transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        {/* Close icon - only on mobile */}
        <div className="md:hidden flex justify-end p-4">
          <FaTimes
            className="text-xl text-gray-700 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* List container */}
        <div
          className="relative flex flex-col gap-[36px]"
          style={{
            width: "250px",
            height: "771px",
            top: "20px",
            left: "20px",
          }}
        >
          {/* Learning Section */}
          <div className="w-[250px] h-[453px] flex flex-col gap-[24px]">
            <div className="font-poppins font-medium text-[18px] leading-[140%] text-gray-700">
              Learning
            </div>

            <div className="flex flex-col gap-[20px]">
              <SidebarItem icon={<FaBook />} label="Plan" />
              <SidebarItem icon={<FaChalkboardTeacher />} label="Learn" active />
              <SidebarItem icon={<FaPencilAlt />} label="Practice" />
              <SidebarItem icon={<FaRedo />} label="Revise" />
              <SidebarItem icon={<FaBrain />} label="Reflect" />
              <SidebarItem icon={<FaChartLine />} label="Grow" />
            </div>
          </div>

          {/* Shortcuts Section */}
          <div className="w-[250px] h-[173px] flex flex-col gap-[24px]">
            <div className="font-poppins font-medium text-[18px] leading-[140%] text-gray-700">
              Shortcuts
            </div>
            <div className="flex flex-col gap-[20px]">
              <SidebarItem icon={<FaStickyNote />} label="My Notebook" />
              <SidebarItem icon={<FaUser />} label="My Account" />
            </div>
          </div>

          {/* Connect Section */}
          <div className="w-[250px] h-[73px] flex flex-col gap-[24px]">
            <div className="font-poppins font-medium text-[18px] leading-[140%] text-gray-700">
              Connect
            </div>
            <div className="flex gap-4 text-[20px] text-gray-500">
              <FaInstagram className="cursor-pointer hover:text-[#E1306C]" />
              <FaTwitter className="cursor-pointer hover:text-[#1DA1F2]" />
              <FaYoutube className="cursor-pointer hover:text-[#FF0000]" />
              <FaLinkedin className="cursor-pointer hover:text-[#0A66C2]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 🔹 Extracted reusable component for items
const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
      className={`w-[250px] h-[54px] ${
        active ? "bg-[#3EA2E9] text-white" : "bg-white text-gray-800"
      } rounded-[16px] px-[15px] flex items-center gap-3 font-poppins font-medium text-[16px] leading-[140%]`}
    >
      {icon}
      {label}
    </div>
  );
};

export default Sidebar;

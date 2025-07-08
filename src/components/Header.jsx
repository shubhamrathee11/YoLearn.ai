import { FaMoon, FaBell, FaCog, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-300">
      <div className="max-w-[1440px] mx-auto h-[70px] px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-[47px] w-auto object-contain max-w-[178px]"
          />
        </div>

        {/* Icon Group */}
        <div className="flex gap-4 md:gap-8">
          <FaMoon className="text-gray-600 text-[20px] md:text-[24px] cursor-pointer" />
          <FaBell className="text-gray-600 text-[20px] md:text-[24px] cursor-pointer" />
          <FaCog className="text-gray-600 text-[20px] md:text-[24px] cursor-pointer" />
          <FaUser className="text-gray-600 text-[20px] md:text-[24px] cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;

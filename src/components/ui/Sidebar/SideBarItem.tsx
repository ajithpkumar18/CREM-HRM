
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarItem = ({
  activeicon,
  inactiveicon,
  text,
  path
}: {
  activeicon?: string;
  inactiveicon?: string;
  text?: string;
  path: string
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname === path;

  const handleClick = () => {
    navigate(path);
  };
  return (
    <div
      className={`flex w-full items-center border-l-2 ${isActive ? "active:border-purple-primary-500 text-purple-primary-500 bg-gray-200" : "text-gray-500"} px-5 py-2 mb-4 gap-4 hover:bg-gray-200  cursor-pointer`}
      onClick={handleClick}
    >

      <span>
        <img src={isActive ? activeicon : inactiveicon} alt="" />
      </span>
      <span className={`text-md active:text-purple-primary-500`}>{text}</span>
    </div>
  );
};
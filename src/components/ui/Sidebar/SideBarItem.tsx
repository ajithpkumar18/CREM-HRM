import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarItem = ({
  activeicon,
  inactiveicon,
  text,
  currentPath,
  path
}: {
  activeicon?: string;
  inactiveicon?: string;
  text?: string;
  currentPath:string,
  path:string
}) => {
  const isActive = currentPath === path;
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div
      className={`flex w-full items-center ${
        isActive ? "border-l-2 border-purple-primary-500" : ""
      }  px-5 py-2 mb-4 gap-4 hover:bg-gray-200 text-gray-500 cursor-pointer`}
      onClick={handleClick}
    >
      {isActive ? (
        <span>
          <img src={activeicon} alt="" />
        </span>
      ) : (
        <span>
          <img src={inactiveicon} alt="" />
        </span>
      )}
      <span className={`text-md ${isActive ? "text-purple-primary-500" : ""}`}>{text}</span>
    </div>
  );
};
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarItem = ({
  activeicon,
  inactiveicon,
  text,
}: {
  activeicon?: string;
  inactiveicon?: string;
  text?: string;
}) => {
  const [active, setActive] = useState(false);
    const current = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
      if (text === "Setting") {
          navigate("/settings");
          return;
      }
      let path = "";
      if (text === "All Employees") path = "/employees";
      else if (text === "Dashboard") path = "/dashboard";
      else if (text === "All Leads") path = "/leads";
      else if (text === "Attendance") path = "/attendance";
      else if (text === "Holidays") path = "/holidays";
      else if (text === "Settings") path = "/settings";
      else {
          path = `/${text?.toLowerCase().replace(/\s/g, "")}`;
      }

    navigate(path);
  };

    const path = current.pathname.toString().toLowerCase();
    console.log(path)
    // console.log(typeof (path))
    // console.log(path.length)
    // console.log(path.slice(1, path.length) == text?.toLowerCase())
    let val: any = text?.toLowerCase().split(" ")
    val = val[0] && val[1] ? val[0] + val[1] : val[0];
    // console.log(typeof (text))
    useEffect(() => {
        if (path.slice(1, path.length) == val?.toLowerCase()) setActive(true)
    }, [])

  return (
    <div
      className={`flex w-full ${
        active ? "border-l-2 border-purple-primary-500" : ""
      }  px-5 py-2 mb-4 gap-4 hover:bg-gray-200 text-gray-500 cursor-pointer`}
      onClick={handleClick}
    >
      {active ? (
        <span>
          <img src={activeicon} alt="" />
        </span>
      ) : (
        <span>
          <img src={inactiveicon} alt="" />
        </span>
      )}
      <span className={`text-md ${active ? "text-purple-primary-500" : ""}`}>{text}</span>
    </div>
  );
};
import React from "react";

interface Props {
  title: string;
  isActive?: boolean;
}

const NavButton = ({ title, isActive }: Props) => {
  return (
    <button
      className={`${
        isActive && "bg-[#036765]"
      } hover:bg-[#036756] text-white py-2 px-4 rounded`}
    >
      {title}
    </button>
  );
};

export default NavButton;

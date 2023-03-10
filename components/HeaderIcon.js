import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div
      style={{ fontSize: "30px" }}
      className="rounded-xl flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group"
    >
      <Icon
        className={`h-5 group-hover:text-blue-500 text-center sm:h-7 mx-auto text-gray-500 ${
          active && "text-blue-600"
        }`}
      />
    </div>
  );
}

export default HeaderIcon;

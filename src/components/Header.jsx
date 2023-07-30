import React from "react";
import profile from "../images/profile.jpg";
const Header = () => {
  return (
    <div className=" w-11/12 mx-auto p-2 flex justify-between items-center border-b-2  border-black">
      <p className="text-lg font-semibold ">MOVIE APP</p>
      <img className="w-[50px] rounded-full" src={profile} alt="" />
    </div>
  );
};

export default Header;

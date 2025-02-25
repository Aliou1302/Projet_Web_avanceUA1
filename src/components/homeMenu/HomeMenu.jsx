import React from "react";
import homeMenuData from "@/data/homeMenuData.json";
import Card from "../card/Card";

const HomeMenu = () => {
  return (
    <div className="flex flex-col w-full justify-center gap-2 p-2 sm:flex-row">
      {homeMenuData.map(({ id, image, title }) => (
        <div className="flex flex-col p-1 w-50 h-50 sm:w-200 h-200" key={id}>
          <div className="flex-1">
            <img
              src={image}
              alt="Event Image"
              className="w-full h-full object-cover sm:w-[500px]"
            />
          </div>
          <h1 className="h-20 w-full text-center font-[0.4rem] font-bold sm:font-[1.2rem] font-extrabold p-2">
            {title}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default HomeMenu;

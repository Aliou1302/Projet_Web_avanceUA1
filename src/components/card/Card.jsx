import React from "react";
import Link from "next/link";

const Card = ({ id, image, title }) => {
  return (
    <div className="flex flex-col p-1 w-50 h-50 sm:w-200 h-200">
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
      <Link
        href={`/events/${id}`}
        className="text-center text-white px-4 py-1 mx-auto sm:px-10 py-2 bg-[#7B9EE8] hover:bg-[#6A8DCB]"
      >
        Voir plus
      </Link>
    </div>
  );
};

export default Card;

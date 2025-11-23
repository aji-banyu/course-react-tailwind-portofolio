import React from "react";
import RoundedImg from "../../atoms/RoundedImg";

const CardLarge = ({ img, text, tech, title, onClick }) => {
  const viewButton = (option) => {
    return (
      <button
        className={`relative z-1 mt-auto h-8 cursor-pointer truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 px-5 py-1 text-center text-sm font-semibold whitespace-nowrap text-white shadow-md backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-100 hover:bg-white/20 ${option}`}
        onClick={onClick}
      >
        Discover More
      </button>
    );
  };

  return (
    <div className="relative flex h-46 w-full justify-between rounded-4xl p-4 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <img
        src={img}
        alt="img"
        className="absolute top-0 left-0 z-0 h-full w-full rounded-4xl object-cover shadow-md"
      />
      <div className="relative z-1 flex max-w-[180px] flex-col items-start justify-start gap-2 text-left leading-4 text-white">
        <p>{title}</p>
        <p className="line-clamp-3 text-xs leading-3">{text}</p>
      </div>

      {viewButton("max-lg:hidden")}

      <div className="flex flex-col items-end justify-between gap-2 pl-4">
        <div className="relative z-1 flex">
          {tech.map((item, index) => (
            <RoundedImg key={index} src={item.icon} index={index} />
          ))}
        </div>

        {viewButton("lg:hidden")}
      </div>
    </div>
  );
};
export default CardLarge;

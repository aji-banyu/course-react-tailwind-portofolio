import React from "react";

const CardSmall = ({ img, title, link }) => {
  return (
    <button
      className="relative flex h-24 w-32 cursor-pointer flex-col items-center justify-center rounded-xl bg-(--bg-tertiary-cray) p-2 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={() => window.open(link, "_blank")}
    >
      <img
        src={img}
        alt={title}
        className="absolute -top-14 h-20 w-20 rounded-full object-contain shadow-2xl"
      />
      <p className="text-center text-sm leading-4 font-semibold">{title}</p>

      <div className="absolute -bottom-4 flex h-10 w-10 scale-75 rotate-45 items-center justify-center rounded-[20px] border bg-(--text-color-black)">
        <i className="fa fa-arrow-up text-xs text-white"></i>
      </div>
    </button>
  );
};

export default CardSmall;

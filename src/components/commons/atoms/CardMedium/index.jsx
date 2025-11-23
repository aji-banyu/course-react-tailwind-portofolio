const CardMedium = ({bgimg, title, onClick}) => {
  return (
    <button 
      className="relative h-34 w-34 flex flex-col justify-end bg-cover bg-center text-white shadow-lg rounded-2xl max-md:h-28 max-md:w-28"
      onClick={onClick}
    >
      <img
        src={bgimg} 
        className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 rounded-2xl"
      />
      <p 
        className="absolute bottom-2 left-1/2 w-26 -translate-x-1/2 transform truncate overflow-hidden rounded-[20px] border border-white/20 bg-white/10 text-center text-sm font-semibold whitespace-nowrap text-white shadow-md backdrop-blur-md"
      >
        {title}
      </p>
      <div className="absolute top-2 right-2 flex h-5 w-5 scale-75 rotate-45 items-center justify-center rounded-[20px] border border-white/20 bg-white/10 text-white shadow-md backdrop-blur-md transition-transform duration-300 ease-in-out hover:scale-100 hover:bg-white/20">
        <i className="fa fa-arrow-up text-xs text-white"></i>
      </div>
    </button>
  )
}

export default CardMedium
const BoxProfile = ({ picture, name, onClick }) => {
  return (
    <button
      className="flex h-10 cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-(--bg-primary-cray) bg-transparent pr-3 pl-1 opacity-85 hover:opacity-100"
      onClick={onClick}
    >
      <img src={picture} className="h-8 w-8 rounded-full object-cover" />
      <p className="text-sm font-semibold text-white">{name}</p>
      <i className="fa fa-chevron-right rotate-90 text-(--bg-primary-cray)"></i>
    </button>
  );
};

export default BoxProfile;

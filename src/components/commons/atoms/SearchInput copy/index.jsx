const SearchInput = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <div className="flex h-10 w-auto items-center justify-center gap-1 rounded-full bg-(--bg-primary-cray)">
      <input
        className="ml-4 bg-transparent text-(--text-color-black) placeholder:text-(--text-color-grey) focus:outline-none"
        type="text"
        placeholder="Searching..."
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-(--bg-secondary-cray) opacity-85 hover:opacity-100"
        onClick={() => {
          onSearch(value);
        }}
      >
        <i className="fa-solid fa-magnifying-glass text-(--text-color-black)"></i>
      </button>
    </div>
  );
};

export default SearchInput;

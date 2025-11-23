const languages = [
  { id: "en", name: "EN" },
  { id: "id", name: "ID" },
  { id: "fr", name: "FR" },
  { id: "DL", name: "DL" },
];

const BoxLanguage = ({ translate, setTranslate }) => {
  return (
    <div className="flex h-10 w-auto items-center justify-center gap-1 text-white text-sm">
      <i className="fa-solid fa-globe"></i>
      {languages.map((language) => (
        <p
          key={language.id}
          id={language.id}
          className={`cursor-pointer ${translate === language.id ? "opacity-100" : "opacity-75 hover:opacity-100"}`}
          onClick={() => setTranslate(language.id)}
        >
          {language.name}
        </p>
      ))}
    </div>
  );
};

export default BoxLanguage;

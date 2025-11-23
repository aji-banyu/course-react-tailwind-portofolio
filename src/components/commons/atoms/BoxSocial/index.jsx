const listSocial = [
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "X",
    icon: "fa-solid fa-x",
    link: "https://x.com/",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const BoxSocial = () => {
  return (
    <div className="mt-15 flex gap-2">
      {listSocial.map((item, index) => (
        <button
          key={index}
          className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-2 py-1 hover:bg-(--bg-secondary-cray)"
          onClick={() => window.open(item.link, "_blank")}
        >
          <i className={`${item.icon} text-md`}></i>
        </button>
      ))}
    </div>
  );
};
export default BoxSocial;

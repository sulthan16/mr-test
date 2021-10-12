export default function Footer() {
  const menus = [
    { title: "Videos", path: "section-1" },
    { title: "People", path: "section-2" },
    { title: "Documents", path: "section-3" },
    { title: "Events", path: "section-4" },
    { title: "Communities", path: "section-5" },
    { title: "Favorites", path: "section-6" },
    { title: "Channels", path: "section-7" },
  ];

  const MENU_RENDER = [];

  const handleOnClickMenu = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  menus.forEach((item, index) => {
    if (!item.children) {
      MENU_RENDER.push(
        <li
          className="text-center cursor-pointer"
          key={index}
          onClick={() => handleOnClickMenu(item.path)}
        >
          <a
            href="#"
            alt={`link-${index}`}
            className="text-black text-white no-underline hover:text-white py-2 px-4"
          >
            {item.title}
          </a>
        </li>
      );
    }
  });
  return (
    <footer className="mt-24 px-5">
      <div className="container mx-auto border-t-2 border-solid primary-border">
        <div className="w-full">
          <ul className="flex flex-1 items-center relative">{MENU_RENDER}</ul>
        </div>
        <div className="mt-2 px-5 primary-text">
          Copyright2021 companyname inc
        </div>
        <div className="mt-2 px-5 primary-text"> Privacy / Terms</div>
      </div>
    </footer>
  );
}

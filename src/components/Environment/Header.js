import { useState, useEffect } from "react";
import { faSearch, faUpload, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [mobileSearchIsOpen, setMobileSearchIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobileMenuIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menus = [
    { title: "Videos", path: "section-1" },
    { title: "People", path: "section-2" },
    { title: "Documents", path: "section-3" },
    { title: "Events", path: "section-4" },
    { title: "Communities", path: "section-5" },
    { title: "Favorites", path: "section-6" },
    { title: "Channels", path: "section-7" },
  ];

  // const menus = [];

  const handleShowMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
    setMobileSearchIsOpen(false);
  };

  const handleShowSearch = () => {
    setMobileMenuIsOpen(false);
    setMobileSearchIsOpen(!mobileSearchIsOpen);
  };

  const handleOnClickMenu = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const MENU_RENDER = [];
  menus.forEach((item, index) => {
    if (!item.children) {
      MENU_RENDER.push(
        <li
          className="py-3 lg:py-0 text-center cursor-pointer garing"
          key={index}
          onClick={() => handleOnClickMenu(item.path)}
        >
          {/* <Link href={item.path}> */}
          <a
            href="#"
            alt={`link-${index}`}
            className="text-black text-white no-underline hover:text-white py-2 px-4"
          >
            {item.title}
          </a>
          {/* </Link> */}
        </li>
      );
    }
  });

  return (
    <nav
      className={`fixed w-full z-30 top-0
        ${scrollPosition > 10 && "bg-red-900 shadow-lg"}
        ${mobileMenuIsOpen && "lg:shadow-none shadow-lg"}`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4 flex items-center">
          <a onClick={() => handleOnClickMenu("home")}>
            <div className="md:text-4xl flex pr-6 primary-text">
              <span className="text-white text-weight-700">Sosial</span>Network
            </div>
          </a>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20">
            <div className="ml-16 relative">
              <input
                type="text"
                className="primary-background h-14 w-96 pl-5 pr-20 z-0 focus:shadow focus:outline-none"
                placeholder="Find.."
              />
              <div className="absolute top-4 right-3">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-400 z-20 hover:text-gray-500"
                />
              </div>
            </div>
          </div>
          <button className="ml-11 primary-background p-3">
            <FontAwesomeIcon icon={faUpload} /> Upload
          </button>
          <button className="ml-11 primary-background p-3">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <div className="ml-2 flex flex-row flex-col primary-text">
            <span className="text-2xl w-1/4">Waseem</span>
            <span className="text-sm w-1/4"> Arshad</span>
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <div className="block lg:hidden pr-4">
              <button
                onClick={() => {
                  console.log("hallo");
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-white border-2 border-solid border-white hover:bg-gray-700 focus:outline-none"
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>
            <div className="block lg:hidden pr-4">
              <button
                onClick={() => handleShowSearch()}
                className="inline-flex items-center justify-center p-2 rounded-md text-white border-2 border-solid border-white hover:bg-gray-700 focus:outline-none"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            {menus.length > 0 && (
              <div className="block lg:hidden pr-4">
                <button
                  onClick={() => {
                    handleShowMenu();
                  }}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white border-2 border-solid border-white hover:bg-gray-700 focus:outline-none"
                >
                  {!mobileMenuIsOpen && (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  )}
                  {mobileMenuIsOpen && (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="lg:visible w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3  md:border-t-2 md:border-b-2 primary-border">
        <div className="pl-4 flex items-center">
          <div className="w-full flex-grow md:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20">
            <ul className="list-reset lg:flex justify-end flex-1 items-center relative">
              {MENU_RENDER}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          mobileSearchIsOpen ? "block" : "hidden"
        } w-full container mx-auto flex flex-wrap items-center mt-0 py-3`}
      >
        <div className="relative">
          <input
            type="text"
            className="primary-background h-14 w-full pl-12 pr-24 z-0 focus:shadow focus:outline-none"
            placeholder="Find.."
          />
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          mobileMenuIsOpen ? "block" : "hidden"
        } w-full container mx-auto flex flex-wrap items-center mt-0 py-3`}
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {MENU_RENDER}
        </ul>
      </div>
      {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}
    </nav>
  );
}

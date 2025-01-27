import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { navigation } from "../constants";
import myLogo from "/mylogo.png";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  function toggleMobileMenu() {
    setIsMobileMenuOpen((old) => !old);
  }

  function handlLinkClick(event, href) {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPostion = targetElement.getBoundingClientRect().top;
      const offsetPostion = elementPostion + window.scrollY + offset;

      window.scrollTo({
        top: offsetPostion,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  }
  return (
    <div>
      <nav className="fixed left-0 right-0 top-0 lg:top-4 z-50">
        {}
        <div
          className="mx-auto hidden max-w-2xl items-center 
        justify-center rounded-lg border border-stone-50/30
        bg-black/20 py-3 backdrop-blur-lg lg:flex"
        >
          <div className="flex items-center justify-between mr-8">
            <a href="#hero" onClick={(e) => handlLinkClick(e, "#hero")}>
              <img src={myLogo} width={40} alt="" />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-4">
              {navigation.map((item) => (
                <li key={item.pageid}>
                  <a
                    href={item.page_href}
                    className="text-sm hover:text-yellow-400"
                    onClick={(e) => handlLinkClick(e, item.page_href)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*Mobile */}
        <div className="rounded-lg backdrop-blur-md  py-4 m-0 lg:hidden">
          <div className="flex items-center justify-between mx-5 ">
            <div>
              <a href="#hero" onClick={(e) => handlLinkClick(e, "#hero")}>
                <img src={myLogo} width={40} alt="" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 , w-5" />
                ) : (
                  <FaBars className="h-6 , w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {navigation.map((item) => (
                <li key={item.pageid}>
                  <a
                    href={item.page_href}
                    className="text-sm hover:text-yellow-400"
                    onClick={(e) => handlLinkClick(e, item.page_href)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

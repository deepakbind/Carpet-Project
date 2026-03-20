import { FaAngleDown, FaBars } from "react-icons/fa";
import "./navbar.css";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { scrollToTop } from "../../constants/scrollToTop";

const NavBar = ({ navBar2, showCase1Page }) => {

  const [whenScroll, setWhenScroll] = useState("bg-transparent");
  const [logo, setlogo] = useState("/Homyz-logo.png");
  const [textColor, setTextColor] = useState("text-white");
  const [showcaseDropDown, setShowcaseDropDown] = useState(false);
  const [viewSideNav, setViewSideNav] = useState(false);

  const hideNav = () => {
    setViewSideNav(false);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setWhenScroll("bg-white");
        setlogo("/Homyz-logo.png");
        setTextColor("text-black");
      } else {
        setWhenScroll("transparent");
        setTextColor("text-white");
        setlogo("/Homyz-logo.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <>
      <div
        style={{ zIndex: 98 }}
        className={
          showCase1Page
            ? "top-0 left-0 right-0 absolute"
            : `${navBar2 ? "bg-white shadow-xl" : whenScroll} ${
                whenScroll === "bg-white" ? "shadow-xl" : ""
              } transition-all fixed top-0 left-0 right-0`
        }
      >
        <nav
          style={{ maxWidth: 1200 }}
          className="flex justify-between mx-auto items-center gap-4 py-7 max-md:py-5 px-10 max-sm:px-5 font-medium"
        >
          <Link onClick={scrollToTop} to="/">
            <img
              src={navBar2 ? "/Homyz-logo2.png" : logo}
              className="w-8 sm:w-10 md:w-12 h-auto object-contain"
              alt="logo"
            />
            <h1>Azal International</h1>
          </Link>

          {/* Desktop Menu */}
          <ul
            className={
              showCase1Page
                ? "text-xl flex max-lg:hidden gap-8 text-white"
                : `${
                    navBar2 ? "text-black" : textColor
                  } text-xl flex max-lg:hidden gap-8`
            }
          >
            <Link onClick={scrollToTop} to="/" className="hover:text-red-500">
              Home
            </Link>

            <Link
              onClick={scrollToTop}
              to="/Services"
              className="hover:text-red-500"
            >
              Our Services
            </Link>

            <div className="showcase-menu cursor-pointer hover:text-red-500 relative">
              Collections
              <div className="showcase-list hidden absolute -left-4">
                <ul className="mt-4 flex flex-col gap-2 bg-white text-black p-4 px-5 rounded-md w-48 border">
                  <li>
                    <Link to="/showcases/showcase1">Project</Link>
                  </li>
                  <li>
                    <Link to="/showcases/showcase2">Library</Link>
                  </li>
                  <li>
                    <Link to="/showcases/showcase2">Shop</Link>
                  </li>
                  <li>
                    <Link to="/showcases/showcase2">Sectors</Link>
                  </li>
                  <li>
                    <Link to="/showcases/showcase2">Global Presence</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/about" className="hover:text-red-500">
              About
            </Link>

            <Link to="/contact">
              <Button content={"Contact Us"} padding={"px-5 py-2"} />
            </Link>
          </ul>

          {/* Mobile Menu Icon */}
          <ul
            className={`${
              navBar2 ? "text-black" : textColor
            } text-xl hidden max-lg:flex gap-8`}
          >
            <FaBars
              onClick={() => setViewSideNav(!viewSideNav)}
              className="cursor-pointer"
            />
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setViewSideNav(false)}
        className={`fixed ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } top-0 left-0 right-0 bottom-0 bg-black/40`}
      ></div>

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 bottom-0 ${
          viewSideNav ? "translate-x-0" : "-translate-x-full"
        } bg-white left-0 w-80 p-5 transition-all`}
      >
        <div className="flex justify-between items-center">
          <img className="w-36" src="/Homyz-logo2.png" alt="logo" />
          <div onClick={() => setViewSideNav(false)}>✕</div>
        </div>

        <ul className="flex flex-col gap-3 mt-8 text-xl">
          <Link onClick={hideNav} to="/">
            Home
          </Link>

          <Link onClick={hideNav} to="/services">
            Our Services
          </Link>

          <div>
            <div
              onClick={() => setShowcaseDropDown(!showcaseDropDown)}
              className="flex justify-between cursor-pointer"
            >
              <p>Our Collections</p>
              <FaAngleDown />
            </div>

            {showcaseDropDown && (
              <ul className="pl-5 mt-3 flex flex-col gap-2">
                <Link onClick={hideNav} to="/showcases/showcase1">
                  Collection 1
                </Link>
                <Link onClick={hideNav} to="/showcases/showcase2">
                  Collection 2
                </Link>
              </ul>
            )}
          </div>

          <Link onClick={hideNav} to="/about">
            About
          </Link>

          <Link onClick={hideNav} to="/contact">
            <Button content={"Contact Us"} padding={"py-2 px-3"} />
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
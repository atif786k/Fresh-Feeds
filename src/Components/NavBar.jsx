import { useState } from "react";
import {
  FaSearch,
  FaHamburger,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Style.css";
import "animate.css";

function NavBar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav
        className={`ff-nav-bar animate__animated animate__fadeInDown bg-[#050505] text-white z-10 w-full fixed top-0 px-6 py-2 md:px-28 xl:px-44 3xl:px-52 ${
          active ? "shadow-none" : "shadow-xl"
        }`}
      >
        <div className="flex items-center justify-between">
          <div id="logo" className="relative text-white">
            <span className="">Fresh</span>
            <span className="text-[#008080]">FeedS</span>
          </div>
          <div className="flex items-center relative space-x-4 text-2xl">
            <input
              type="search"
              name="siteSearch"
              id="search-bar"
              placeholder="Search..."
              className="hidden text-black md:grid"
            />
            <FaSearch className="cursor-pointer text-black absolute right-8 hover:text-white" />
            <Link to="#" onClick={() => setActive(!active)}>
              <IoMenu className="text-[32px] md:hidden hover:text-white" />
            </Link>
          </div>
        </div>
        <div
          id="liItems"
          className={active ? "opacity-100" : "opacity-0 md:opacity-100"}
        >
          <ul className="bg-[#fefefe] text-[#050505] text-xl absolute left-0 w-full px-6 py-2 mt-2 uppercas font-bold shadow-md md:flex md:justify-center md:space-x-8 lg:space-x-16">
            <li></li>
            <li className="lineAnimationHome text-[#008080]">
              <Link to="/" rel="">
                Home
              </Link>
            </li>
            <li className="lineAnimation">
              <Link to="/business" rel="">
                Business
              </Link>
            </li>
            <li className="lineAnimation">
              <Link to="/sports" rel="">
                Sports
              </Link>
            </li>
            <li className="lineAnimation">
              <Link to="/technology" rel="">
                Technology
              </Link>
            </li>
            <li className="lineAnimation">
              <Link to="/health" rel="">
                Health
              </Link>
            </li>
            <li className="lineAnimation">
              <Link to="/entertainment" rel="">
                Entertainment
              </Link>
            </li>
            <li className="worldAnimation text-white border-2 border-red-500 rounded-sm px-2 hover:bg-white hover:text-red-600">
              <Link to="/world" rel="">
                World
              </Link>
            </li>
          </ul>
        </div>
        <div className="floating-links animate__animated animate__fadeInLeftBig bg-[#dfdede] text-[#050505] hidde px-4 py-4 space-y-3 text-2xl rounded-tr-2xl rounded-br-2xl flex flex-col hover:scale-110 hover:translate-x-2 transition duration-300 ease-in-out z-10">
          <span className="footer_id">
            <Link to="https://www.facebook.com/moh.atif.927" target="_blank">
              <FaFacebook className="fa cursor-pointer hover:text-[#008080]" />
            </Link>
          </span>
          <span className="footer_id">
            <Link to="https://github.com/atif786k" target="_blank">
              <FaGithub className="fa cursor-pointer hover:text-[#008080]" />
            </Link>
          </span>
          <span className="footer_id">
            <Link
              to="https://www.linkedin.com/in/mohammad-atif-a14b04205/"
              target="_blank"
            >
              <FaLinkedin className="fa cursor-pointer hover:text-[#008080]" />
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

// #008080 == blue shade
// #050505 == black shade
// #dddbcb == grey shade

import React from "react";
import "./Style.css";
import {
  FaPhoneAlt,
  FaMailBulk,
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaTelegramPlane
} from "react-icons/fa";


function Footer() {
  return (
    <>
      <footer id="_footer" className="bg-[#050505] md:px-20 xl:px-44">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 px-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 text-white md:mb-0">
              <span id="footerLOGO" className="self-center text-3xl font-semibold whitespace-nowrap">
                <span className="">FreshFeedS</span>
                {/* <span className="text-[#dddbcb]">S</span> */}
              </span>
              <div className="my-3 text-lg text-[#008080]">
                Contact Me
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-400 mt-3 hover:text-white">
                    <FaPhoneAlt className="text-[#008080] inline mr-3" />
                    +9856124763
                  </li>
                  <li className="text-gray-400 hover:text-white">
                    <FaMailBulk className="text-[#008080] inline mr-4" />
                    <a href="mailto:matif91201@gmail.com" target="_blank">
                      matif91201@gmail.com
                    </a>  
                  </li>
                  <li className="pt-4 flex items-center space-x-4">
                    <input type="mail" name="mail" placeholder="xyz@gmail.com" className="rounded-sm border-2 border-[#008080] py-[5px] px-4"/>
                    <button className="border-2 border-[#008080] px-2 py-[6px] bg-[#008080] rounded-sm text-gray-300 hover:text-white"><FaTelegramPlane/></button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-md font-semibold text-[#008080] uppercase">
                  Resources
                </h2>
                <ul className="text-gray-400 text-md font-medium space-y-2">
                  <li className="hover:text-white">Stack Overflow</li>
                  <li className="hover:text-white">RapidAPI</li>
                  <li className="hover:text-white">ChatGPT</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-[#008080] uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-400 text-md font-medium space-y-2">
                  <li className="">
                    <a
                      href="https://github.com/atif786k"
                      target="_blank"
                      className="hover:underline hover:text-white"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mohammad-atif-a14b04205/"
                      target="_blank"
                      className="hover:underline hover:text-white"
                    >
                      Linked In
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/moh.atif.927"
                      target="_blank"
                      className="hover:underline hover:text-white"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/_mohd.atif__/?hl=en"
                      target="_blank"
                      className="hover:underline hover:text-white"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-semibold text-[#008080] uppercase">
                  Legal
                </h2>
                <ul className="text-gray-400 font-medium space-y-2 text-md">
                  <li className="">
                    <a href="#" className="hover:underline hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline hover:text-white">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-md text-gray-300 sm:text-center">
              © 2023 Fresh Feeds . All Rights Reserved.
            </span>
            <div id="socialMedia" className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-300 hover:text-[#008080]">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#008080]">
                <FaDiscord />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#008080]">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#008080]">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#008080]">
                <FaInstagram />

              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

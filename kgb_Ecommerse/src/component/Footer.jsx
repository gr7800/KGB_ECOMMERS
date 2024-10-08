import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-gray-900 text-white py-8 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center">
        <div className="flex flex-col justify-center gap-5 w-full lg:w-[60%] md:w-[70%] sm:w-[90%]">
          <ul className="flex justify-center space-x-4 mb-4 md:mb-0 w-full">
            <li className="cursor-pointer hover:text-gray-400">Terms Of Use</li>
            <li className="cursor-pointer hover:text-gray-400">Privacy-Policy</li>
            <li className="cursor-pointer hover:text-gray-400">About</li>
            <li className="cursor-pointer hover:text-gray-400">Blog</li>
            <li className="cursor-pointer hover:text-gray-400">FAQ</li>
          </ul>

          <div className="text-sm mb-4 md:mb-0 text-gray-400 w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

          <div className="flex space-x-4 justify-center items-center">
            <a href="https://www.facebook.com/mayakkatheriya/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/gupta_ji_813/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/Mayankkatheriya" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mayank-gupta-752328173/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

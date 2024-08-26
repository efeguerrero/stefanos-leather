import React from "react";

//Next Imports
import Link from "next/link";
import Image from "next/image";

//Assets Imports
import logo from "/public/assets/images/brand/logo.png";

const Footer = () => {
  const [currentYear, setCurrentYear] = React.useState("");

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="mx-auto mt-auto w-full max-w-7xl pb-4 pt-12">
      <div className="container flex flex-col items-center pb-4 pt-8 lg:flex-row">
        <Link
          className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
          href="/"
        >
          <img src={logo.src} className="h-8 w-auto" alt="Brand Logo" />
        </Link>
        <p className=" mt-4 text-center text-sm sm:ml-4 sm:mt-0 sm:border-gray-600 sm:py-2 sm:pl-4 lg:border-l-2">
          All Rights Reserved. ©<span id="yearHolder">{currentYear}</span>{" "}
          Stefanos Leather.
        </p>
        <span className="mt-4 inline-flex justify-center sm:mt-0 sm:justify-start lg:ml-auto">
          <p className="text-sm">
            Designed and developed by
            <Link
              className="text-sm font-semibold text-bravo transition-all hover:cursor-pointer"
              href="https://franguerrero.dev/"
              target="_blank"
            >
              {` {fg}`}
            </Link>
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

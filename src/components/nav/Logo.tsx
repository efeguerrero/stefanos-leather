import React from "react";

//Next Imports
import Link from "next/link";
import Image from "next/image";

//Assets Imports
import logo from "/public/assets/images/brand/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo.src}
        width={462}
        height={101}
        alt="Brand Logo"
        className="h-8 w-auto"
      />
    </Link>
  );
};

export default Logo;

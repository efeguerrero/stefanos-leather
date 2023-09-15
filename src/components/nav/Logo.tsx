import React from "react";

//Next Imports
import Link from "next/link";

//Framer Motion Imports
import { motion } from "framer-motion";

//Assets Imports
import logo from "/public/assets/images/brand/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <motion.img src={logo.src} alt="Brand Logo" className="h-8 w-auto" />
    </Link>
  );
};

export default Logo;

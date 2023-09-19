import { useState, useEffect } from "react";

//Component Imports
import Logo from "@/components/nav/Logo";
import MenuDialog from "@/components/nav/MenuDialog";

//Framer Motion Imports
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 0 ? setIsSticky(true) : setIsSticky(false);
  });

  return (
    <motion.section
      initial={{
        boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      }}
      animate={{
        boxShadow: isSticky
          ? "0px 4px 30px 0px rgba(0, 0, 0, 0.2)"
          : "0px 0px 0px 0px rgba(0, 0, 0, 0)",
      }}
      id="navContainer"
      className="sticky inset-x-0 top-0 z-[11] bg-white py-5"
    >
      <div className="container flex max-w-7xl items-center justify-between">
        <Logo />
        <motion.nav className="flex w-max items-center justify-center  ">
          {/* //Mobile Menu */}
          <motion.div className="flex gap-24">
            <MenuDialog />
          </motion.div>
        </motion.nav>
      </div>
    </motion.section>
  );
}

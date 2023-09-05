import { useState } from "react";
import Image from "next/image";

//Radix Import
import * as Dialog from "@radix-ui/react-dialog";

//Logo Import
import logo from "/public/assets/images/brand/logo.png";

//Framer Motion Imports
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Shipping", href: "#shipping" },
  { name: "Contact", href: "#contact" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 0 ? setIsSticky(true) : setIsSticky(false);
  });

  //Framer Motion Variants

  const draw = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    initial: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 1, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 1, duration: 0.01 },
      },
    },
    hoverClose: {
      pathLength: 0,
      opacity: 0,
      transition: {
        pathLength: { delay: 0, type: "spring", duration: 0.8, bounce: 0 },
        opacity: { delay: 0, duration: 0.8 },
      },
    },
  };

  const menuIcon = {
    initial: {
      backgroundColor: "#fff",
      padding: "1rem",
    },

    sticky: {
      backgroundColor: "#fff",
      boxShadow: "0 4px 30px 0px rgba(0,0,0,0.1)",
      padding: "1rem",
    },
  };

  const logoImg = {
    initial: {
      opacity: 0,
    },
    mobileVisible: {
      opacity: 1,
      transition: {
        opacity: { duration: 0.1 },
      },
    },
    desktopVisible: {
      opacity: 1,
      transition: {
        opacity: { duration: 0.5, delay: 0.5 },
      },
    },
  };

  return (
    <motion.section
      id="navContainer"
      className="fixed inset-x-0 top-0 z-[11] flex w-[100vw] items-center justify-between bg-transparent px-6 py-6 lg:justify-end lg:px-12 lg:py-10"
    >
      <motion.div
        initial="initial"
        animate={isSticky ? "initial" : "mobileVisible"}
        variants={logoImg}
        className="mr-auto grow basis-0 lg:hidden "
      >
        <img src={logo.src} alt="Brand Logo" className="h-8 w-auto" />
      </motion.div>
      <motion.nav className="flex w-max items-center justify-center  ">
        {/* //Mobile Menu */}
        <div className="flex gap-24">
          <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <Dialog.Trigger>
              <motion.div
                variants={menuIcon}
                animate={isSticky ? "sticky" : "initial"}
                whileHover="hover"
                id="menuIcon"
                className="group flex aspect-square cursor-pointer flex-col items-center justify-center rounded-full"
              >
                <motion.div
                  layoutId="line1"
                  variants={{
                    hover: {
                      x: "10px",
                    },
                  }}
                  className="  block h-[2px] w-[1.8rem] rounded-sm bg-black "
                ></motion.div>
                <motion.div className="my-[7px] block h-[2px] w-[1.8rem] rounded-sm bg-black "></motion.div>
                <motion.div
                  layoutId="line2"
                  variants={{
                    hover: {
                      x: "-10px",
                    },
                  }}
                  className=" block h-[2px] w-[1.8rem] rounded-sm bg-black"
                ></motion.div>
              </motion.div>
            </Dialog.Trigger>
            <AnimatePresence>
              {isMenuOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay />
                  <Dialog.Content
                    asChild
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-50 h-[100dvh] w-full bg-white"
                    >
                      <section className="container relative flex h-full flex-col items-center justify-around py-16">
                        <div className="flex w-full items-center justify-center lg:justify-between">
                          <motion.div
                            initial="initial"
                            animate="desktopVisible"
                            variants={logoImg}
                            className="bottom-10 hidden lg:bottom-20 lg:right-20 lg:block  "
                          >
                            <img
                              src={logo.src}
                              alt="Brand Logo"
                              className="h-10 w-auto"
                            />
                          </motion.div>
                          <div className=" top-10 flex flex-col items-center gap-4 lg:right-20 lg:top-20 lg:flex-row lg:justify-center">
                            <Dialog.Close asChild>
                              <motion.div
                                id="menuCloseIcon"
                                className="relative flex h-8 w-8 cursor-pointer flex-col items-center justify-center rounded-full border-[1px] border-transparent p-6 "
                              >
                                <motion.svg
                                  viewBox="0 0 100 100"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute z-40"
                                  initial="hidden"
                                  animate="initial"
                                  whileHover="hoverClose"
                                >
                                  <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="45%"
                                    fill="transparent"
                                    stroke="black"
                                    strokeWidth="2px"
                                    variants={draw}
                                  ></motion.circle>
                                </motion.svg>

                                <motion.div
                                  layoutId="line1"
                                  animate={{
                                    rotate: 45,
                                  }}
                                  className="absolute my-[7px] h-[2px] w-[1.8rem] -translate-y-[50%] rounded-sm bg-black/80 "
                                ></motion.div>
                                <motion.div
                                  layoutId="line2"
                                  animate={{
                                    rotate: -45,
                                  }}
                                  className="absolute my-[7px] h-[2px] w-[1.8rem] translate-y-[50%] rounded-sm bg-black/80 "
                                ></motion.div>
                              </motion.div>
                            </Dialog.Close>
                          </div>
                        </div>
                        <div className="flex grow flex-col items-center justify-center gap-6 lg:items-center">
                          {navigation.map((item, index) => {
                            return (
                              <motion.div
                                key={index}
                                whileHover="hover"
                                whileTap={{
                                  scale: 0.9,
                                  transition: {
                                    duration: 0.1,
                                  },
                                }}
                                initial={{
                                  y: "var(--translate-wide,0)",
                                  opacity: "var(--opacity-small,1)",
                                }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                  opacity: {
                                    type: "tween",
                                    duration: 1,
                                    delay: 0.3 + index / 5,
                                  },
                                  y: {
                                    type: "tween",
                                    duration: 0.8,
                                    delay: 0.2 - index / 10,
                                  },
                                }}
                                className="relative my-4 flex items-center gap-2 [--opacity-small:0] lg:gap-6 lg:[--opacity-small:1] lg:[--translate-wide:-100vw]"
                              >
                                <motion.div
                                  initial={{
                                    scaleX: 0,
                                    scaleY: 0,
                                  }}
                                  variants={{
                                    hover: {
                                      scaleX: 1.1,
                                      scaleY: 1.1,

                                      transition: {
                                        backgroundColor: {
                                          duration: 0,
                                        },
                                        duration: 0.3,

                                        type: "tween",
                                      },
                                    },
                                  }}
                                  className="bg-gray absolute left-[0] hidden h-[100%] w-[100%] rounded-md lg:block "
                                ></motion.div>
                                <motion.a
                                  variants={{
                                    hover: {
                                      color: "var(--hover-color,black)",
                                    },
                                  }}
                                  href={item.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`z-10 text-center text-4xl font-light uppercase tracking-widest text-black lg:text-6xl lg:[--hover-color:white]`}
                                >
                                  {item.name}
                                </motion.a>
                              </motion.div>
                            );
                          })}
                        </div>
                      </section>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </motion.nav>
    </motion.section>
  );
};

export default Nav;

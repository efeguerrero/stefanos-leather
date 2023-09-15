//Component Imports
import Logo from "@/components/nav/Logo";
import MenuDialog from "@/components/nav/MenuDialog";

//Framer Motion Imports
import { motion } from "framer-motion";

export default function Nav() {
  // const [isSticky, setIsSticky] = useState(false);

  // const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   latest > 0 ? setIsSticky(true) : setIsSticky(false);
  // });

  return (
    <motion.section
      id="navContainer"
      className="container sticky inset-x-0 top-0 z-[11] flex max-w-7xl items-center justify-between bg-transparent px-8 pb-6 pt-8"
    >
      <Logo />
      <motion.nav className="flex w-max items-center justify-center  ">
        {/* //Mobile Menu */}
        <div className="flex gap-24">
          <MenuDialog />
        </div>
      </motion.nav>
    </motion.section>
  );
}

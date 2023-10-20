import { useRef } from "react";

import {
  ArchiveBoxIcon,
  CloudArrowUpIcon,
  CubeIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

//Framer Motion Imports
import { motion, useInView } from "framer-motion";

//Asstes imports
import mapImg from "@/assets/imgs/worldmap.svg";
import mapMobile from "@/assets/imgs/mobileMap.svg";

//Next Js Imports
import Image from "next/image";

const features = [
  {
    name: "Transport.",
    description:
      " We offer shipping options via air or sea transport, depending on the customer's preference.",
    icon: GlobeAltIcon,
  },
  {
    name: "Pricing Policy.",
    description:
      " Our international pricing policy is based on FOB (Free On Board) pricing.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Product Delivery.",
    description:
      "Packaging and handling methods to ensure the safe delivery of your products.",
    icon: CubeIcon,
  },
];

export default function Shipping() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {
    once: true,
    margin: "0px 0px -90% 0px ",
  });

  return (
    <motion.div
      ref={contentRef}
      id="shipping"
      className="mx-auto max-w-7xl overflow-hidden py-24 sm:py-32"
    >
      <div className="container grid grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:grid-cols-[2.5fr_4fr]">
        <div className="lg:pt-4">
          <div className="lg:max-w-md">
            <h2 className="text-base font-semibold leading-7 text-gray-700">
              Our products to your location.
            </h2>
            <p className=" mt-2 text-4xl  font-bold text-gray-950 ">
              Worldwide Shipping
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our headquarters are located in Buenos Aires, Argentina, but we
              have been serving as exporters since 1995, with our primary
              destinations including Germany, Russia, and Greece, among others.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-950">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-gray-700"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div
          className={`${
            isInView ? "saturate-100" : "saturate-0"
          } relative border-[1px] border-r border-white transition-all  duration-500 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-xl after:shadow-[inset_-70px_0px_90px_-5px_#ffffff] md:after:shadow-none lg:after:shadow-[inset_-90px_0px_50px_-30px_#ffffff]`}
        >
          <Image
            src={mapImg}
            alt="Product screenshot"
            className="hidden h-full object-cover md:block lg:aspect-auto lg:object-left"
          />
          <Image
            src={mapMobile}
            alt="Product screenshot"
            className="h-full object-cover md:hidden md:aspect-auto lg:object-left"
          />
        </div>
      </div>
    </motion.div>
  );
}

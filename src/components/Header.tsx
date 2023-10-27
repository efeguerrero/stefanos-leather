import Image from "next/image";

//Images Import
import headerImg1 from "@/assets/imgs/header/headerImg_1.webp";
import headerImg2 from "@/assets/imgs/header/headerImg_2.webp";
import headerImg3 from "@/assets/imgs/header/headerImg_3.webp";

const Header = () => {
  return (
    <>
      <header className="mx-auto max-w-7xl">
        <div className="container relative h-[calc(100svh-4.5rem)] overflow-hidden bg-white pt-8">
          <section className="flex h-full w-full flex-col items-center justify-center gap-2 sm:justify-end sm:gap-14">
            <div className="flex w-full items-center justify-start @container sm:hidden">
              <h2 className="w-full text-left font-extrabold uppercase leading-[1.1] tracking-normal text-gray-950 @[1rem]:[font-size:clamp(1rem_,16cqw_,3.4rem)] ">
                Argentine leather <br /> to the world
              </h2>
            </div>
            {/* desktop Img Grid */}
            <div
              id="imageGrid"
              className=" hidden h-full grow auto-rows-[100%] justify-center gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 "
            >
              <div className="flex h-full flex-col justify-start gap-6 pb-3 @container">
                <h2 className="text-left font-extrabold uppercase leading-[1] tracking-normal text-gray-950 @[1rem]:text-[17cqw]">
                  Argentine leather to the world
                </h2>
                <img
                  src={headerImg1.src}
                  sizes="(min-width: 640px) 50vw,(min-width:1024px) 33vw,33vw"
                  alt="Living Room Photo"
                  className="h-full min-h-0 rounded-lg object-cover"
                />
              </div>
              <div className="hidden h-full pb-6 pt-10 lg:block">
                <img
                  src={headerImg2.src}
                  alt="Living Room Photo"
                  className=" h-full min-h-0 rounded-lg object-cover "
                />
              </div>
              <div className="flex h-full flex-col gap-6">
                <img
                  loading="eager"
                  src={headerImg3.src}
                  alt="Living Room Photo"
                  className="h-full min-h-0 rounded-lg object-cover"
                />
                <h2 className="font-regular f col-start-2 pb-12 text-left text-base tracking-tighter text-gray-800">
                  <span className="text-xl font-extrabold uppercase tracking-normal">
                    We are Stefanos Leather.
                  </span>
                  <br />
                  Based in Argentina, we have been crafting and distributing
                  leather and fur products, using only the finest local raw
                  materials, for both local and global markets for over 35
                  years.
                </h2>
              </div>
            </div>
            {/* mobile Img Grid */}
            <div
              id="imageGrid"
              className="grid w-full grow grid-cols-3 gap-2 pb-8 sm:hidden"
            >
              <div className="h-full pt-12">
                <Image
                  src={headerImg1}
                  alt="Living Room Photo"
                  className="h-full min-h-0 rounded-lg object-cover"
                />
              </div>
              <div className="h-full pb-4 pt-6 ">
                <Image
                  src={headerImg2}
                  priority
                  alt="Living Room Photo"
                  className=" h-full min-h-0 rounded-lg object-cover "
                />
              </div>
              <div className="h-full pb-8 pt-0">
                <Image
                  src={headerImg3}
                  alt="Living Room Photo"
                  className=" h-full min-h-0 rounded-lg object-cover "
                />
              </div>
            </div>
          </section>
        </div>
      </header>

      <section className="container flex items-center justify-center py-24 sm:hidden lg:py-32">
        <h2 className="mt-6 w-full text-lg leading-8 text-gray-600 ">
          <span className="mb-2 text-4xl font-extrabold uppercase text-gray-950">
            We are Stefanos Leather.
          </span>
          <br />
          <br />
          Based in Argentina, we have been crafting and distributing leather and
          fur products, using only the finest local raw materials, for both
          local and global markets for over 35 years.
        </h2>
      </section>
    </>
  );
};

export default Header;

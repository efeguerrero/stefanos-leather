import Image from "next/image";

//Dummy images
const images = [
  "https://images.pexels.com/photos/5942742/pexels-photo-5942742.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/9565973/pexels-photo-9565973.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/12474787/pexels-photo-12474787.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/12619591/pexels-photo-12619591.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5942742/pexels-photo-5942742.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Header = () => {
  return (
    <>
      <header className="container relative h-[calc(100svh-4.5rem)] max-w-7xl overflow-hidden bg-white pt-8">
        <section className="flex h-full w-full flex-col items-center justify-center gap-2 sm:justify-end sm:gap-14">
          <div className="flex w-full items-center justify-start @container sm:hidden">
            <h2 className="w-full text-left font-bold uppercase leading-[1.1] tracking-normal text-gray-950 @[1rem]:[font-size:clamp(1rem_,16cqw_,3.4rem)] ">
              Argentine leather <br /> to the world
            </h2>
          </div>
          {/* desktop Img Grid */}
          <div
            id="imageGrid"
            className=" hidden h-full  grow auto-rows-[100%] justify-center gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 "
          >
            <div className="hidden h-full pb-6 lg:hidden">
              <Image
                src={images[0]}
                width={600}
                height={900}
                alt="Living Room Photo"
                className="h-full min-h-0 rounded-lg object-cover"
              />
            </div>
            <div className="flex h-full flex-col justify-start gap-6 pb-3 @container">
              <h2 className="text-left font-bold uppercase leading-[1] tracking-normal text-gray-950 @[1rem]:text-[17cqw]">
                Argentine leather to the world
              </h2>
              <Image
                src={images[1]}
                width={600}
                height={900}
                alt="Living Room Photo"
                className="h-full min-h-0 rounded-lg object-cover"
              />
            </div>
            <div className="hidden h-full pb-6 pt-10 lg:block">
              <Image
                width={600}
                height={900}
                src={images[2]}
                priority
                alt="Living Room Photo"
                className=" h-full min-h-0 rounded-lg object-cover "
              />
            </div>
            <div className="flex h-full flex-col gap-6">
              <Image
                src={images[3]}
                width={600}
                height={900}
                alt="Living Room Photo"
                className="h-full min-h-0 rounded-lg object-cover"
              />
              <h2 className="font-regular f col-start-2 pb-12 text-left text-base tracking-tighter text-gray-800">
                <span className="text-xl font-extrabold uppercase tracking-normal">
                  We are Stefanos Leather.
                </span>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae sint deserunt autem fuga, a soluta accusantium
                tempora quaerat similique perspiciatis nihil voluptate at
                delectus tenetur doloremque sed, accusamus consequatur rerum.
              </h2>
            </div>
            <div className="hidden h-full pb-3 pt-6 2xl:hidden">
              <Image
                src={images[4]}
                width={600}
                height={900}
                alt="Living Room Photo"
                className=" h-full min-h-0 rounded-lg object-cover "
              />
            </div>
          </div>
          {/* mobile Img Grid */}
          <div
            id="imageGrid"
            className="grid w-full grow grid-cols-3 gap-2 pb-8 sm:hidden"
          >
            <div className="h-full pt-12">
              <Image
                src={images[0]}
                width={600}
                height={900}
                alt="Living Room Photo"
                className="h-full min-h-0 rounded-lg object-cover"
              />
            </div>
            <div className="h-full pb-4 pt-6 ">
              <Image
                width={600}
                height={900}
                src={images[2]}
                priority
                alt="Living Room Photo"
                className=" h-full min-h-0 rounded-lg object-cover "
              />
            </div>
            <div className="h-full pb-8 pt-0">
              <Image
                src={images[3]}
                width={600}
                height={900}
                alt="Living Room Photo"
                className=" h-full min-h-0 rounded-lg object-cover "
              />
            </div>
          </div>
        </section>
      </header>

      <section className="container flex items-center justify-center py-24 sm:hidden lg:py-32">
        <h2 className="font-regular w-full text-left text-base tracking-tighter text-gray-950">
          <span className="mb-2 text-4xl font-extrabold uppercase tracking-tight">
            We are Stefanos Leather.
          </span>
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          sint deserunt autem fuga, a soluta accusantium tempora quaerat
          similique perspiciatis nihil voluptate at delectus tenetur doloremque
          sed, accusamus consequatur rerum.
        </h2>
      </section>
    </>
  );
};

export default Header;

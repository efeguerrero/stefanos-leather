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
      <header className="relative h-[100svh] overflow-hidden bg-white px-6 pt-24 lg:px-0  lg:pb-[0.5rem] lg:pt-[4.5rem]">
        <section className="flex h-full w-full flex-col items-center justify-end gap-14">
          <div className="z-10 flex w-full grow items-center justify-start lg:hidden lg:grow-0">
            <h2 className="w-full text-left font-extrabold uppercase leading-[1.1] tracking-normal text-black [font-size:clamp(1rem_,13vw_,3.5rem)] md:text-center lg:text-left">
              Argentine leather <br /> to the world
            </h2>
          </div>
          {/* desktop Img Grid */}
          <div
            id="imageGrid"
            className=" container hidden h-[40%] w-[100vw] grow auto-rows-[100%] grid-cols-5 justify-center gap-6 lg:grid "
          >
            <Image
              src={images[0]}
              width={600}
              height={900}
              alt="Living Room Photo"
              className="h-[93%]  w-full self-center rounded-lg object-cover"
            />
            <div>
              <h2 className="col-start-2 mt-4 text-left text-[3vw] font-extrabold uppercase leading-[1] tracking-normal text-black">
                Argentine leather to the world
              </h2>

              <Image
                src={images[1]}
                width={600}
                height={900}
                alt="Living Room Photo"
                className="mt-8 h-[65%] w-full rounded-lg object-cover"
              />
            </div>
            <Image
              width={600}
              height={900}
              src={images[2]}
              priority
              alt="Living Room Photo"
              className="h-[92%] w-full -translate-y-[2rem] self-end rounded-lg object-cover"
            />

            <div className="flex h-full flex-col gap-6">
              <Image
                src={images[3]}
                width={600}
                height={900}
                alt="Living Room Photo"
                className=" h-[50%] w-full grow self-start rounded-lg object-cover"
              />
              <h2 className="font-regular f col-start-2 pb-12 text-left text-sm tracking-tighter text-black">
                <span className="text-xl font-extrabold uppercase tracking-tight">
                  We are Stefanos Leather.
                </span>
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae sint deserunt autem fuga, a soluta accusantium
                tempora quaerat similique perspiciatis nihil voluptate at
                delectus tenetur doloremque sed, accusamus consequatur rerum.
              </h2>
            </div>

            <Image
              src={images[4]}
              width={600}
              height={900}
              alt="Living Room Photo"
              className="h-[92%] w-full -translate-y-[0.5rem] self-center rounded-lg object-cover"
            />
          </div>
          {/* mobile Img Grid */}
          <div
            id="imageGrid"
            className="grid w-[110vw] auto-rows-[35svh] grid-cols-4 gap-2 pb-2 sm:auto-rows-[20rem] md:grow-0 md:auto-rows-[50svh] lg:hidden"
          >
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image}
                  priority={index === 2 ? true : false}
                  width={600}
                  height={900}
                  alt="Living Room Photo"
                  className="h-full w-full rounded-lg object-cover last:hidden even:-translate-y-[3rem] [&:nth-child(3)]:h-[90%] [&:nth-child(4)]:-translate-y-[1rem] "
                />
              );
            })}
          </div>
        </section>
      </header>

      <section className="container my-16 flex min-h-[50svh] items-center justify-center lg:hidden">
        <h2 className="font-regular w-full text-left text-base tracking-tighter text-black">
          <span className="mb-2 text-4xl font-extrabold uppercase tracking-tight">
            We are Stefanos Leather.
          </span>
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

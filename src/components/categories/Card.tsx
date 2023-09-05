const Card = () => {
  return (
    <div
      id="categoryCard"
      className="group relative flex aspect-square h-[25rem] min-w-[30%] grow items-end overflow-hidden rounded-xl p-8 lg:rounded-none lg:p-12"
    >
      <div
        id="imgContainer"
        className="absolute left-0 top-0 h-full w-full bg-[url(https://images.pexels.com/photos/5942742/pexels-photo-5942742.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-[1.1]"
      ></div>
      <div
        id="darkCover"
        className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/0 to-black/70"
      ></div>
      {/* Card Content */}
      <div id="cardContent" className="absolute z-10 flex flex-col">
        <h2 id="categoryName" className="text-2xl font-medium text-white">
          Rugs
        </h2>
        <h3 className="text-lg font-medium text-white/70">
          Our finest leather rugs
        </h3>
        <a href="#">
          <button className="mt-4 cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white">
            See More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;

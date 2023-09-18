import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

//Asstes imports
import mapImg from "@/assets/imgs/worldmap.svg";
import mapMobile from "@/assets/imgs/mobileMap.svg";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div
      id="shipping"
      className="mx-auto max-w-7xl overflow-hidden py-24 sm:py-32"
    >
      <div className="container grid grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:grid-cols-[2.5fr_4fr]">
        <div className="lg:pt-4">
          <div className="lg:max-w-md">
            <h2 className="text-base font-semibold leading-7 text-alpha">
              Our products to your location.
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Worldwide Shipping
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-alpha"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="relative border-[1px] border-r border-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-xl after:shadow-[inset_-70px_0px_90px_-5px_#ffffff] md:after:shadow-none lg:after:shadow-[inset_-90px_0px_50px_-30px_#ffffff]  ">
          <img
            src={mapImg.src}
            alt="Product screenshot"
            className="hidden h-full object-cover md:block lg:aspect-auto lg:object-left"
            width={2432}
            height={1442}
          />
          <img
            src={mapMobile.src}
            alt="Product screenshot"
            className="h-full object-cover md:hidden md:aspect-auto lg:object-left"
          />
        </div>
      </div>
    </div>
  );
}

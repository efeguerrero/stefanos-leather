import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

//Asstes imports
import mapImg from "@/assets/imgs/worldmap.svg";
import mapMobile from "@/assets/imgs/mobileMap.png";

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
    <div className=" overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-[2.5fr_4fr]">
          <div className="lg:pt-4">
            <div className="lg:max-w-md">
              <h2 className="text-base font-semibold leading-7 text-alpha">
                Our products to your location.
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Worldwide Shipping
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
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
          <div className="relative after:absolute after:left-0 after:top-0 after:h-full after:w-full after:shadow-[inset_-40px_40px_60px_5px_#ffffff]  ">
            <img
              src={mapImg.src}
              alt="Product screenshot"
              className="hidden h-full object-cover lg:block lg:aspect-auto lg:object-left"
              width={2432}
              height={1442}
            />
            <img
              src={mapMobile.src}
              alt="Product screenshot"
              className="h-full object-cover lg:hidden lg:aspect-auto lg:object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

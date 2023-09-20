//Next Imports
import Link from "next/link";

//Components Imports
import Logo from "@/components/nav/Logo";

export default function Custom404() {
  return (
    <section className="mx-auto max-w-7xl">
      <main className="container grid min-h-full place-items-center bg-white">
        <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 text-center">
          <Logo />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Page not found.
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-600 lg:text-xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}

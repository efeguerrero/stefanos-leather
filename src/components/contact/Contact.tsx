import React from "react";

//Component Imports
import Form from "@/components/contact/Form";
import Info from "@/components/contact/Info";

const Contact = () => {
  return (
    <section className=" bg-gray-100 ">
      <div
        id="contact"
        className="mx-auto max-w-7xl overflow-hidden py-24 sm:py-32"
      >
        <div className="container grid items-start gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-2 ">
            <h3 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </h3>
            <p className=" mb-6 max-w-xl text-lg leading-8 text-gray-600">
              Get in touch with our sales team and let us know about any
              requirements or questions you might have.
            </p>
            <Info />
          </div>
          <div className="mt-8 md:grid md:place-items-center lg:mt-0 lg:block">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

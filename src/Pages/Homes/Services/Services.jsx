import React from "react";
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Teeth from "../../../assets/images/whitening.png";

const servicesData = [
  {
    title: "Fluoride Treatment",
    image: Fluoride,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tempore ipsam.",
  },
  {
    title: "Cavity Filling",
    image: Cavity,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tempore ipsam.",
  },
  {
    title: "Teeth Whitening",
    image: Teeth,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, tempore ipsam.",
  },
];

import ServicesDetails from "../ServicesDetails/ServicesDetails";

const Services = () => {
  return (
    <section>
      <div className="text-center my-4">
          <h5 className="text-sm font-bold mb-2 text-[#1CC7C1]">
            OUR SERVICES
          </h5>
          <h3 className="text-2xl font-semibold">Services We Provide</h3>
        </div>
        <div className="grid lg:w-11/12 lg:mx-auto lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1">
          {servicesData?.map((services, index) => (
            <ServicesDetails key={index} services={services} />
          ))}
        </div>
    </section>
  );
};

export default Services;

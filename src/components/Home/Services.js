import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div id="services" className="container mx-auto">
      <div className="py-16">
        <h2 className="text-center text-3xl md:text-5xl ">
          All-Inclusive Resorts
        </h2>
        <p className="text-center text-xl mt-3">
          On the Caribbean's Best Beaches
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {service.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

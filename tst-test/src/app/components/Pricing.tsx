import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <>
      <div
        id="pricing"
        className="min-h-screen container pt-20 px-4 md:px-8  lg:px-16"
      >
        <div className="bg-mythemes-secondaryPurple text-center p-4 text-white rounded-[50px] md:rounded-[100px] py-10 md:py-20 mb-10">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold mx-auto w-full md:w-3/4 lg:w-1/2">
            Simple pricing that scales with your business
          </p>
          <p className="mt-5 text-sm font-light mx-auto w-full md:w-3/4 lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            consequatur perspiciatis quae deserunt, assumenda harum. Repellat
            velit consequuntur vitae qui porro impedit quibusdam fugit quam?
          </p>
        </div>
        <div>
          <PricingCard />
        </div>
      </div>
    </>
  );
};

export default Pricing;

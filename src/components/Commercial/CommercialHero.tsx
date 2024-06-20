import React from "react";

export default function CommercialHero() {
  return (
    <section className="container grid grid-cols-2 gap-x-10 items-center">
      <div>
        <span className="text-xs font-medium text-primary mb-6 block uppercase">Commercial & specialty</span>
        <h1 className="text-5xl leading-tight mb-5">
          More than a bank. A <br /> financial partner.
        </h1>
        <p className="mb-5 text-lg max-w-[600px]">
          Our seasoned industry insiders have the tools and know-how to lift your organization to new heights.
        </p>
        <button className="text-white flex items-center text-sm font-medium border-2 border-primary bg-primary hover:bg-primary-hover px-10 py-3">
          FIND A BANKER
        </button>
      </div>
      <div className="min-h-[85vh] bg-commercialHeroBg bg-center bg-no-repeat bg-cover border border-black "></div>
    </section>
  );
}

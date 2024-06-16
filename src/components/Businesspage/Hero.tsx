import React from "react";

export default function Hero() {
  return (
    <section className="bg-businessHeroBg min-h-[30rem] bg-center grid place-content-center">
      <div className="container  text-white grid grid-cols-2 gap-x-32">
        <div className="bg-black px-8 py-10 min-w-[600px] flex flex-col justify-center">
          <h2 className="text-xs mb-1 rounded-xl">BUSINESS BANKING</h2>
          <span className="h-1 w-10 bg-primary block mb-3 rounded-lg"></span>
          <h1 className="mb-3 text-3xl">Business banking on your terms and conditions.</h1>
          <p>
            {`We're`} from here. Since 1905, Horizon has been proud to work with local businesses across central Texas
            and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

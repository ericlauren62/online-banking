import React from "react";
import img1 from "/public/community-img1.png";
import Image from "next/image";

export default function HomeThirdSection() {
  return (
    <section className="mt-20 mb-44 bg-primary-hover">
      <div className="container grid grid-cols-2">
        <div className="-mt-10 -mb-20">
          <Image src={img1} alt="a man holding a woman" />
        </div>
        <div className="text-white my-auto px-24">
          <h2 className="text-3xl mb-5">
            Where there’s a <br /> need, there’s a way.
          </h2>
          <p className="mb-5">
            Whatever our clients and communities are inspired to achieve, {"we're"} ready to help them find a way.
          </p>
          <button className="flex justify-center text-white items-center bg-primary py-3 w-[250px]">Learn More</button>
        </div>
      </div>
    </section>
  );
}

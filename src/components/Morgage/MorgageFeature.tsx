import Image from "next/image";
import Link from "next/link";
import React from "react";

import featureImg1 from "/public/morgagefeature1.jpg";
import featureImg2 from "/public/morgagefeature2.jpg";
import featureImg3 from "/public/morgagefeature3.jpg";
import FeaturedCard from "../Shared/FeaturedCard";

export default function MorgageFeature() {
  return (
    <section className="py-20">
      <div className="mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-4xl">Mortgage Loan Options</h2>
      </div>

      <div className="bg-secondary text-white pb-20">
        <div className="container grid grid-cols-3 gap-x-10">
          <FeaturedCard
            img={featureImg1}
            title="Buy a home"
            description={`Whether you're purchasing your first home or your retirement home, we have a wide range of mortgage
              solutions.`}
          />
          <FeaturedCard
            img={featureImg2}
            title="Refinance a home"
            description={` Low rates make this a great time to think about mortgage options for refinancing your home.`}
          />
          <FeaturedCard
            img={featureImg3}
            title="Build a home"
            description={` Low rates make this a great time to think about mortgage options for refinancing your home.`}
          />
        </div>
      </div>
    </section>
  );
}

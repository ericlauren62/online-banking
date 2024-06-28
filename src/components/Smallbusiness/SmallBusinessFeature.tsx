import Image from "next/image";
import Link from "next/link";
import React from "react";

import featureImg1 from "/public/smallbusinessfeature1.jpg";
import featureImg2 from "/public/smallbusinessfeature2.jpg";
import featureImg3 from "/public/smallbusinessfeature3.jpg";
import FeaturedCard from "../Shared/FeaturedCard";

export default function SmallBusinessFeature() {
  return (
    <section className="pt-10 pb-20">
      <div className="mb-10 xl:mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-2xl xl:text-4xl ">Small business banking suggestions</h2>
      </div>

      <div className="bg-primary-hover text-white pt-10 pb-20">
        <div className="container grid gap-y-20 xl:grid-cols-3 xl:gap-x-10">
          <FeaturedCard
            img={featureImg1}
            title="Small Business Lending"
            description="Small business loans, lines and credit, coupled with personalized service and efficient decisions, make
              the First Horizon lending team a perfect fit for your business."
          />

          <FeaturedCard
            img={featureImg2}
            title="Checkings"
            description="Your business isn’t one-size-fits-all. That’s why we offer business owners three distinct checking
              accounts – so you can have a solution that perfectly suits your small business."
          />

          <FeaturedCard
            img={featureImg3}
            title="Digital Banking"
            description="Managing business finances has never been easier. Now you can access your account anytime, anywhere – plus
              enjoy a full suite of powerful tools, even when you’re on the go."
          />
        </div>
      </div>
    </section>
  );
}

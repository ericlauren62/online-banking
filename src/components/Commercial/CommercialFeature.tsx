import Image from "next/image";
import Link from "next/link";
import React from "react";

import featureImg1 from "/public/commercialfeature1.jpg";
import featureImg2 from "/public/commercialfeature2.jpg";
import featureImg3 from "/public/commercialfeature3.jpg";
import FeaturedCard from "../Shared/FeaturedCard";

export default function CommercialFeature() {
  return (
    <section className="py-10 xl:py-20">
      <div className="mb-10 xl:mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-2xl xl:text-4xl">Commercial banking suggestions</h2>
      </div>

      <div className="bg-primary-hover text-white pt-10 xl:pt-0 pb-20">
        <div className="container grid  xl:grid-cols-3 gap-y-10 xl:gap-y-0 xl:gap-x-10">
          <FeaturedCard
            img={featureImg1}
            title="Commercial Banking"
            description="Business banking shouldn’t feel overly complex – that’s why we make it easy to manage your cash flow with
              clarity and precision"
          />
          <FeaturedCard
            img={featureImg2}
            title="Treasury Management"
            description="Streamline your financial back office and take control over your cash position – so you can make the most
              of every dollar."
          />
          <FeaturedCard
            img={featureImg3}
            title="Lending and Financing"
            description="Whether you’re focused on short- or long-term expansion, we’ve got a solution that’s just right for your
              organization."
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

import featureImg1 from "/public/wealthfeature1.jpg";
import featureImg2 from "/public/wealthfeature2.jpg";
import featureImg3 from "/public/wealthfeature3.jpg";
import FeaturedCard from "../Shared/FeaturedCard";

export default function WealthServices() {
  return (
    <section className="xl:pt-20">
      <div className="mb-10 xl:mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-2xl xl:text-4xl">Small business banking suggestions</h2>
      </div>

      <div className="bg-primary-hover text-white py-20 xl:py-0 xl:pb-20">
        <div className="container grid gap-y-10 xl:gap-y-0 xl:grid-cols-3 xl:gap-x-10">
          <FeaturedCard
            img={featureImg1}
            title="Financial Planning"
            description="Financial planning can feel intimidating, but it doesn’t have to be. Our licensed, CERTIFIED FINANCIAL
                PLANNER™ professionals work with you one-on-one to understand your goals and put strategy into action."
          />

          <FeaturedCard
            img={featureImg2}
            title="Investing Services"
            description="When it comes to investing, there is no shortage of options. Together, we’ll develop an investment plan
                based on where you are now, and where you’d like to be."
          />

          <FeaturedCard
            img={featureImg3}
            title="Insurance Services"
            description="  Whether you’re interested in life insurance or want to protect your family’s financial stability in the
                event of illness, we’ll leave no stone unturned to help you protect what matters most – you and your
                family."
          />
        </div>
      </div>
    </section>
  );
}

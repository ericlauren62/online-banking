import Image from "next/image";
import Link from "next/link";
import React from "react";

import featureImg1 from "/public/wealthfeature1.jpg";
import featureImg2 from "/public/wealthfeature2.jpg";
import featureImg3 from "/public/wealthfeature3.jpg";

export default function WealthServices() {
  return (
    <section className="pt-20">
      <div className="mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-4xl">Small business banking suggestions</h2>
      </div>

      <div className="bg-primary-hover text-white pb-20">
        <div className="container grid grid-cols-3 gap-x-10">
          <div className="flex flex-col justify-between -mt-20">
            <div className="mb-5">
              <Image src={featureImg1} alt="featured 1 image" className="max-h-full h-[32.1875rem] object-cover" />
            </div>
            <div>
              <h4 className="mb-4 font-medium text-xl">Financial Planning</h4>
              <p className="mb-8">
                Financial planning can feel intimidating, but it doesn’t have to be. Our licensed, CERTIFIED FINANCIAL
                PLANNER™ professionals work with you one-on-one to understand your goals and put strategy into action.
              </p>
            </div>
            <Link href="#" className="block">
              LEARN MORE
            </Link>
          </div>
          <div className="flex flex-col justify-between -mt-20">
            <div className="mb-5">
              <Image src={featureImg2} alt="featured 2 image" className="max-h-full h-[32.1875rem] object-cover" />
            </div>
            <div>
              <h4 className="mb-4 font-medium text-xl">Investing Services</h4>
              <p className="mb-8">
                When it comes to investing, there is no shortage of options. Together, we’ll develop an investment plan
                based on where you are now, and where you’d like to be.
              </p>
            </div>
            <Link href="#" className="block mt-auto">
              LEARN MORE
            </Link>
          </div>
          <div className="flex flex-col justify-between -mt-20">
            <div className="mb-5">
              <Image src={featureImg3} alt="featured 3 image" className="max-h-full h-[32.1875rem] object-cover" />
            </div>
            <div>
              <h4 className="mb-4 font-medium text-xl">Insurance Services</h4>
              <p className="mb-8">
                Whether you’re interested in life insurance or want to protect your family’s financial stability in the
                event of illness, we’ll leave no stone unturned to help you protect what matters most – you and your
                family.
              </p>
            </div>
            <Link href="#" className="block mt-auto">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

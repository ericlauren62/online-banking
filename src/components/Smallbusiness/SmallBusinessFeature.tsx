import Image from "next/image";
import Link from "next/link";
import React from "react";

import featureImg1 from "/public/smallbusinessfeature1.jpg";
import featureImg2 from "/public/smallbusinessfeature2.jpg";
import featureImg3 from "/public/smallbusinessfeature3.jpg";

export default function SmallBusinessFeature() {
  return (
    <section className="py-20">
      <div className="mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-4xl">Small business banking suggestions</h2>
      </div>

      <div className="bg-primary-hover text-white pb-20">
        <div className="container grid grid-cols-3 gap-x-10">
          <div>
            <div className="mb-5">
              <Image
                src={featureImg1}
                alt="featured 1 image"
                className="max-h-full h-[32.1875rem] object-cover -mt-20"
              />
            </div>
            <h4 className="mb-4 font-medium text-xl">Small Business Lending</h4>
            <p className="mb-8">
              Small business loans, lines and credit, coupled with personalized service and efficient decisions, make
              the First Horizon lending team a perfect fit for your business.
            </p>
            <Link href="#">LEARN MORE</Link>
          </div>
          <div>
            <div className="mb-5">
              <Image
                src={featureImg2}
                alt="featured 2 image"
                className="max-h-full h-[32.1875rem] object-cover -mt-20"
              />
            </div>
            <h4 className="mb-4 font-medium text-xl">Checking</h4>
            <p className="mb-8">
              Your business isn’t one-size-fits-all. That’s why we offer business owners three distinct checking
              accounts – so you can have a solution that perfectly suits your small business.
            </p>
            <Link href="#">LEARN MORE</Link>
          </div>
          <div>
            <div className="mb-5">
              <Image
                src={featureImg3}
                alt="featured 3 image"
                className="max-h-full h-[32.1875rem] object-cover -mt-20"
              />
            </div>
            <h4 className="mb-4 font-medium text-xl">Digital Banking</h4>
            <p className="mb-8">
              Managing business finances has never been easier. Now you can access your account anytime, anywhere – plus
              enjoy a full suite of powerful tools, even when you’re on the go.
            </p>
            <Link href="#" className="block mt-auto">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

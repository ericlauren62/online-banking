import Image from "next/image";
import Link from "next/link";
import React from "react";

import featureImg1 from "/public/commercialfeature1.jpg";
import featureImg2 from "/public/commercialfeature2.jpg";
import featureImg3 from "/public/commercialfeature3.jpg";

export default function CommercialFeature() {
  return (
    <section className="py-20">
      <div className="mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-4xl">Commercial banking suggestions</h2>
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
            <h4 className="mb-4 font-medium text-xl">Commercial Banking</h4>
            <p className="mb-8">
              Business banking shouldn’t feel overly complex – that’s why we make it easy to manage your cash flow with
              clarity and precision
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
            <h4 className="mb-4 font-medium text-xl">Treasury Management</h4>
            <p className="mb-8">
              Streamline your financial back office and take control over your cash position – so you can make the most
              of every dollar.
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
            <h4 className="mb-4 font-medium text-xl">Lending and Financing </h4>
            <p className="mb-8">
              Whether you’re focused on short- or long-term expansion, we’ve got a solution that’s just right for your
              organization.
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

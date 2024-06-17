import Image from "next/image";
import featureImg1 from "/public/Featured-home1.jpg";
import featureImg2 from "/public/Featured-home2.jpg";
import featureImg3 from "/public/Featured-home3.jpg";
import Link from "next/link";

export default function Featured() {
  return (
    <section className="py-20">
      <div className="mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-semibold text-4xl">Banking suggestions</h2>
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
            <h4 className="mb-4 font-medium text-xl">Personal</h4>
            <p className="mb-8">
              From personalized checking accounts to simplified mortgage loans, we provide financial solutions for all
              walks of life.
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
            <h4 className="mb-4 font-medium text-xl">Small Business</h4>
            <p className="mb-8">
              Whether you’re looking to maximize cash flow or pursue growth opportunities, we’re excited to take on your
              business challenges together.
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
            <h4 className="mb-4 font-medium text-xl">Commercial</h4>
            <p className="mb-8">
              Bring on a true financial partner – our seasoned industry insiders have the tools and know-how to lift
              your organization to new heights.
            </p>
            <Link href="#">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

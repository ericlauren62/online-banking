import Image from "next/image";
import featureImg1 from "/public/personalfeatured1.jpg";
import featureImg2 from "/public/personalfeatured2.jpg";
import featureImg3 from "/public/personalfeatured3.jpg";
import Link from "next/link";

export default function PersonalFeatured() {
  return (
    <section className="py-20">
      <div className="mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-4xl">Personal Banking suggestions</h2>
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
            <h4 className="mb-4 font-medium text-xl">Take charge with checking</h4>
            <p className="mb-8">
              Whether you’re looking for a simple checking account or something with a little hustle, we’ve got the
              right solution for you. Choose from three distinct options tailored to your specific needs.
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
            <h4 className="mb-4 font-medium text-xl">Make your move with a mortgage</h4>
            <p className="mb-8">
              We make homeownership simple, speedy and affordable. With a variety of mortgage options, we’ve helped
              thousands of people like you finance their dream homes.
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
            <h4 className="mb-4 font-medium text-xl">Begin with a banker</h4>
            <p className="mb-8">
              Have questions? We have answers – with a bunch of friendly bankers on standby to help with your personal
              banking needs.
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

import Image from "next/image";
import featureImg1 from "/public/personalfeatured1.jpg";
import featureImg2 from "/public/personalfeatured2.jpg";
import featureImg3 from "/public/personalfeatured3.jpg";
import Link from "next/link";
import FeaturedCard from "../Shared/FeaturedCard";

export default function PersonalFeatured() {
  return (
    <section className="py-14 xl:py-20">
      <div className="mb-14 xl:mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-3xl xl:text-4xl">Personal Banking suggestions</h2>
      </div>

      <div className="bg-primary-hover text-white xl:pb-20">
        <div className="container grid gap-y-10 py-10 xl:py-0 xl:grid-cols-3 xl:gap-x-10">
          <FeaturedCard
            img={featureImg1}
            title="Take charge with checking"
            description="Whether you’re looking for a simple checking account or something with a little hustle, we’ve got the
              right solution for you. Choose from three distinct options tailored to your specific needs."
          />
          <FeaturedCard
            img={featureImg2}
            title="Make your move with a mortgage"
            description="We make homeownership simple, speedy and affordable. With a variety of mortgage options, we’ve helped
              thousands of people like you finance their dream homes."
          />
          <FeaturedCard
            img={featureImg3}
            title="Begin with a banker"
            description="Have questions? We have answers – with a bunch of friendly bankers on standby to help with your personal
              banking needs."
          />
        </div>
      </div>
    </section>
  );
}

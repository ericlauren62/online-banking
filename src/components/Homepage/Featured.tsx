import featureImg1 from "/public/Featured-home1.jpg";
import featureImg2 from "/public/Featured-home2.jpg";
import featureImg3 from "/public/Featured-home3.jpg";
import FeaturedCard from "../Shared/FeaturedCard";

export default function Featured() {
  return (
    <section className="py-20">
      <div className="mb-10 xl:mb-32 container">
        <h3 className="text-sm font-medium mb-2">FEATURED</h3>
        <h2 className="font-medium text-2xl xl:text-4xl">Banking suggestions</h2>
      </div>

      <div className="bg-primary-hover text-white pb-20">
        <div className="container grid xl:grid-cols-3 gap-y-10  xl:gap-x-10 ">
          <FeaturedCard
            img={featureImg1}
            title="Personal"
            description="From personalized checking accounts to simplified mortgage loans, we provide financial solutions for all
              walks of life."
          />
          <FeaturedCard
            img={featureImg2}
            title="Small Business"
            description="Whether you’re looking to maximize cash flow or pursue growth opportunities, we’re excited to take on your
              business challenges together."
          />
          <FeaturedCard
            img={featureImg3}
            title="Commercial"
            description="Bring on a true financial partner – our seasoned industry insiders have the tools and know-how to lift
              your organization to new heights."
          />
        </div>
      </div>
    </section>
  );
}

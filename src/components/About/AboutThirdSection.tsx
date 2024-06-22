import Image from "next/image";
import map from "/public/aboutmap.jpg";

export default function AboutThirdSection() {
  return (
    <section className="grid grid-cols-2 max-w-[1440px] mx-auto">
      <div>
        <Image src={map} alt="map" />
      </div>
      <div className="bg-primary text-white px-32 flex items-center">
        <div className="my-auto">
          <h2 className="text-4xl mb-5">
            Our company – is strong <br /> and focused.
          </h2>
          <p>
            We leverage what we know and who we are to help you make sense, make plans and make progress with your
            money.
          </p>
        </div>
      </div>
    </section>
  );
}

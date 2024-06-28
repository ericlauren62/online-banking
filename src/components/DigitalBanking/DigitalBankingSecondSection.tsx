import Image from "next/image";
import img1 from "/public/digitalbankingImg1.jpg";
import img2 from "/public/digitalbankingImg2.jpg";

export default function DigitalBankingSecondSection() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid xl:grid-cols-2 items-center mb-12">
          <div className="h-[450px] relative mb-10 xl:mb-0">
            <Image src={img1} alt="man holding child" className="object-center object-cover" fill />
          </div>
          <div className="max-w-[450px] xl:ml-32 px-5 xl:px-0">
            <h3 className="text-2xl xl:text-4xl mb-4 xl:mb-6">Digital and Mobile Banking How-To Videos</h3>
            <p>
              View these brief videos for a quick demonstration of the features of our Digital and Mobile Banking tools.
            </p>
          </div>
        </div>
        <div className=" xl:grid xl:grid-cols-2 items-center">
          <div className="max-w-[450px] xl:ml-24 mb-10 xl:mb-0 px-5 xl:px-0">
            <h3 className="text-2xl xl:text-4xl mb-4 xl:mb-6">Quick Glance</h3>
            <p>
              Short on time? See balance and transaction information on your mobile device without having to log in.
            </p>
          </div>
          <div className="h-[450px] relative">
            <Image src={img2} alt="woman making call" className="object-top object-cover" fill />
          </div>
        </div>
      </div>
    </section>
  );
}

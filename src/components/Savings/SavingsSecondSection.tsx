import Image from "next/image";
import img1 from "/public/certificateImg1.jpg";
import img2 from "/public/certificateImg2.jpg";

export default function SavingsSecondSection() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl xl:text-4xl text-center my-20">Certificates of deposit</h2>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid xl:grid-cols-2 items-center mb-12">
          <div className="h-[450px] relative mb-8 xl:mb-0">
            <Image src={img1} alt="man holding child" className="object-center object-cover" fill />
          </div>
          <div className="max-w-[450px] px-4 xl:px-0 xl:ml-32">
            <h3 className="text-2xl mb-4 xl:text-4xl xl:mb-6">Add-On CD</h3>
            <p>Make deposits almost any time and start saving at your own pace.</p>
          </div>
        </div>
        <div className="flex flex-col-reverse xl:grid xl:grid-cols-2 items-center">
          <div className="max-w-[450px] xl:ml-24 px-4">
            <h3 className="text-2xl xl:text-4xl xl:mb-6 mb-4">Regular CD</h3>
            <p>Flexible terms and fixed interest help you stay on target with your financial goals.</p>
          </div>
          <div className="h-[450px] relative mb-8 xl:mb-0">
            <Image src={img2} alt="woman making call" className="object-top object-cover" fill />
          </div>
        </div>
      </div>
    </section>
  );
}

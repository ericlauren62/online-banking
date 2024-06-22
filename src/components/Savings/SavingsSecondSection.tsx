import Image from "next/image";
import img1 from "/public/certificateImg1.jpg";
import img2 from "/public/certificateImg2.jpg";

export default function SavingsSecondSection() {
  return (
    <section>
      <section>
        <h2 className="text-4xl text-center my-20">Certificates of deposit</h2>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 items-center mb-12">
            <div className="h-[450px] relative">
              <Image src={img1} alt="man holding child" className="object-center object-cover" fill />
            </div>
            <div className="max-w-[450px] ml-32">
              <h3 className="text-4xl mb-6">Add-On CD</h3>
              <p>Make deposits almost any time and start saving at your own pace.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="max-w-[450px] ml-24">
              <h3 className="text-4xl mb-6">Regular CD</h3>
              <p>Flexible terms and fixed interest help you stay on target with your financial goals.</p>
            </div>
            <div className="h-[450px] relative">
              <Image src={img2} alt="woman making call" className="object-top object-cover" fill />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

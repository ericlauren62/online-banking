import Image from "next/image";
import img1 from "/public/savingImg1.jpg";
import img2 from "/public/savingImg2.jpg";

export default function SavingsFirstSection() {
  return (
    <section>
      <h2 className="text-4xl text-center my-20">Savings accounts</h2>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 items-center mb-12">
          <div className="h-[450px] relative">
            <Image src={img1} alt="man holding child" className="object-center object-cover" fill />
          </div>
          <div className="max-w-[450px] ml-32">
            <h3 className="text-4xl mb-6">Money Market Savings</h3>
            <p>Tiered interest lets you earn more as you save more with a Money Market Savings account</p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="max-w-[450px] ml-24">
            <h3 className="text-4xl mb-6">Traditional savings</h3>
            <p>Accumulate extra funds with a low opening deposit and easy access to your money.</p>
          </div>
          <div className="h-[450px] relative">
            <Image src={img2} alt="woman making call" className="object-top object-cover" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
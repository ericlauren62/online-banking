import Image from "next/image";
import img from "/public/contactsmallbusiness.jpg";

export default function SmallBusinessForthSection() {
  return (
    <section className="pt-20 flex justify-between items-center">
      <div className="w-[55%]">
        <Image src={img} alt="contact image" />
      </div>
      <div className="w-[40%] pr-20">
        <h2 className="text-3xl mb-5">Need some help?</h2>
        <p className="mb-5">
          Our small business specialists are here to support you every step of the way. So let’s chat – reach out with
          any questions or find a branch near you.
        </p>
        <button className="text-white flex items-center font-medium border-2 border-primary bg-primary hover:bg-primary-hover px-10 py-3">
          CONNECT WITH A BANKER
        </button>
      </div>
    </section>
  );
}

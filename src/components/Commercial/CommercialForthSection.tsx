import Image from "next/image";
import img from "/public/commercialcontact.jpg";

export default function CommercialForthSection() {
  return (
    <section className="mb-10 xl:mt-0 xl:pt-20 xl:flex xl:justify-between xl:items-center">
      <div className="mb-5 xl:mb-0 xl:w-[55%] ">
        <Image src={img} alt="contact image" />
      </div>
      <div className="xl:max-w-[500px] xl:pr-20 px-3">
        <h2 className="text-3xl mb-5">Need some help?</h2>
        <p className="mb-5">
          Our commercial banking specialists are here to support you every step of the way. So let’s chat – reach out
          with any questions or find a banking center near you.
        </p>
        <div className="flex items-center justify-center xl:block">
          <button className="text-white flex items-center font-medium border-2 border-primary bg-primary hover:bg-primary-hover px-10 py-3">
            CONNECT WITH A BANKER
          </button>
        </div>
      </div>
    </section>
  );
}

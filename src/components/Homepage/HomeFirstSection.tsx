import Image from "next/image";
import HomeFirstSectionImg from "/public/digitalbank.jpg";

export default function HomeFirstSection() {
  return (
    <section className="container xl:flex mt-10 mb-20 xl:gap-20 items-center">
      <div className="mb-10 xl:mb-0 xl:w-[65%]">
        <h2 className="text-3xl mb-5 font-medium">Texas-sized security.</h2>
        <p className="mb-12">
          Your information’s security is our top concern. That’s why we invest in the latest technology to ensure your
          data is secure and you have ultimate peace of mind.
        </p>

        <div>
          <h3 className="text-xl mb-10">Our security features include:</h3>
          <div className="grid xl:grid-cols-2 xl:gap-8">
            <div>
              <h4 className="font-medium mb-3 text-lg text-primary">Positive Pay</h4>
              <p>
                This optional service, designed for customers who issue many checks, creates a list of approved payments
                that is used to compare and verify each item presented for payment.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-base text-primary">IP reputation tools</h4>
              <p>
                Our systems help block access to or from potentially dangerous websites and other malicious actions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-[40%] ml-auto">
        <Image src={HomeFirstSectionImg} alt="security" />
      </div>
    </section>
  );
}

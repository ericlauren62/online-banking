import Image from "next/image";
import HomeFirstSectionImg from "/public/digitalbank.jpg";

export default function HomeFirstSection() {
  return (
    <section className="container flex my-20 gap-20 items-center">
      <div className="w-[65%] text-sm">
        <span></span>
        <h2 className="text-3xl mb-5 font-medium">Texas-sized security.</h2>
        <div className="mb-12">
          <p>
            Your information’s security is our top concern. That’s why we invest in the latest technology to ensure your
            data is secure and you have ultimate peace of mind.
          </p>
        </div>

        <div>
          <h3 className="text-xl mb-10">Our security features include:</h3>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-3 text-base text-primary">Fraud software analytics</h4>
              <p>
                We use sophisticated software that reviews user behavior and transaction risks to help proactively
                identify and stop suspicious activity.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-base text-primary">Positive Pay</h4>
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
      <div className="w-[30%] ml-auto">
        <Image src={HomeFirstSectionImg} alt="security" />
      </div>
    </section>
  );
}

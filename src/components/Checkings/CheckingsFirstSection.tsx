import Image from "next/image";

export default function CheckingsFirstSection() {
  return (
    <section className="py-10">
      <h2 className="text-center text-2xl xl:text-4xl font-light mb-10">Your choice of three checking accounts</h2>
      <div className="grid xl:grid-cols-3 container">
        <div className="border-b xl:border-b-0 xl:border-r border-gray2 p-10 mb-10 xl:mb-0">
          <div className="mb-8">
            <Image
              src="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-DebitCreditCardWide.svg"
              alt="checking img"
              height={70}
              width={70}
            />
          </div>
          <h2 className="text-3xl font-light mb-8">FirstView</h2>
          <h3 className="text-2xl font-medium mb-6">Choose if:</h3>
          <p className="mb-5">
            You like to keep things simple, skip the bells and whistles, and just get your business done.
          </p>
        </div>
        <div className="border-b xl:border-b-0 xl:border-r border-gray2 p-10 mb-10 xl:mb-0">
          <div className="mb-5">
            <Image
              src="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-DebitCreditCardPlus.svg"
              alt="checking img"
              height={70}
              width={70}
            />
          </div>
          <h2 className="text-3xl font-light mb-8">SmartView</h2>
          <h3 className="text-2xl font-medium mb-8">Choose if:</h3>
          <p className="mb-5">You’re looking for an account that’s got a little hustle… just like you.</p>
        </div>
        <div className=" p-10">
          <div className="mb-8">
            <Image
              src="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-DebitCreditCardDoublePlus.svg"
              alt="checking img"
              height={70}
              width={70}
            />
          </div>
          <h2 className="text-3xl font-light mb-8">TotalView</h2>
          <h3 className="text-2xl font-medium mb-6">Choose if:</h3>
          <p className="mb-5">You work hard for your money and want to put it to work for you.</p>
        </div>
      </div>
    </section>
  );
}

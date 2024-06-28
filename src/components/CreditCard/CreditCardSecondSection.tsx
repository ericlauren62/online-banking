export default function CreditCardSecondSection() {
  return (
    <section className="bg-creditCardImg2 bg-no-repeat min-h-[50vh] xl:min-h-[65vh] bg-center bg-cover grid place-content-center">
      <div className="container  text-white xl:grid xl:grid-cols-2 xl:gap-x-32">
        <div className="bg-white text-secondary px-10 xl:pl-12 xl:pr-24 py-10 xl:min-w-[650px] flex flex-col justify-center">
          <h1 className="text-3xl mb-5">Increase your credit</h1>
          <p className="mb-5">Apply online for a credit increase on your existing First Horizon Bank credit card.</p>
          <button className="uppercase py-4 text-center bg-primary text-white w-[250px]">Apply Now</button>
        </div>
      </div>
    </section>
  );
}

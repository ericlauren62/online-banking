export default function WealthHero() {
  return (
    <section className="container grid grid-cols-2 gap-x-10 items-center">
      <div>
        <span className="text-xs font-medium text-primary mb-6 block">WEALTH MANAGEMENT</span>
        <h1 className="text-5xl leading-tight mb-5">
          Working together to <br />
          make your financial <br />
          foundation even <br />
          stronger.
        </h1>
        <p className="mb-5 text-lg max-w-[600px]">
          Enjoy today and prepare for tomorrow with tailored insights to help grow your wealth and solidify your
          financial legacy.
        </p>
        <button className="text-white flex items-center text-sm font-medium border-2 border-primary bg-primary hover:bg-primary-hover px-10 py-3">
          FIND A FINANCIAL ADVISOR
        </button>
      </div>
      <div className="min-h-[85vh] bg-wealthHeroBg bg-center bg-no-repeat bg-cover border border-black "></div>
    </section>
  );
}

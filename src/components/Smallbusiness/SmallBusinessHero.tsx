export default function SmallBusinessHero() {
  return (
    <section className="container py-10 xl:py-0 grid xl:grid-cols-2 xl:gap-x-10 items-center">
      <div className="mb-10 xl:mb-0">
        <span className="text-xs font-medium text-primary mb-6 block">SMALL BUSINESS BANKING</span>
        <h1 className="text-3xl xl:text-4xl leading-tight mb-5">
          Smart banking for <br /> small business.
        </h1>
        <p className="mb-5 text-lg max-w-[600px]">
          Bring ease and convenience to your small business finances – we offer a wealth of smart banking solutions
          designed specifically for businesses like yours.
        </p>
        <button className="text-white flex items-center text-sm font-medium border-2 border-primary bg-primary hover:bg-primary-hover px-10 py-3">
          FIND A BANKER
        </button>
      </div>
      <div className="min-h-[50vh] xl:min-h-[85vh] bg-smallBusinessHero bg-center bg-no-repeat bg-cover border border-black "></div>
    </section>
  );
}

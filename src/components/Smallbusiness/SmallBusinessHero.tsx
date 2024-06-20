export default function SmallBusinessHero() {
  return (
    <section className="container grid grid-cols-2 gap-x-10 items-center">
      <div>
        <span className="text-xs font-medium text-primary mb-6 block">SMALL BUSINESS BANKING</span>
        <h1 className="text-5xl leading-tight mb-5">
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
      <div className="min-h-[85vh] bg-personalHeroBg bg-center bg-no-repeat bg-cover border border-black "></div>
    </section>
  );
}

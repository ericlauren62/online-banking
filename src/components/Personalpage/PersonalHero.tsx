export default function PersonalHero() {
  return (
    <section className="container py-10 xl:py-0 xl:grid xl:grid-cols-2 gap-x-10 items-center">
      <div className="mb-10 xl:mb-0">
        <h1 className="text-3xl xl:text-5xl leading-tight mb-5">
          Banking that builds <br /> opportunity – yours.
        </h1>
        <p className="mb-5 text-lg max-w-[600px]">
          From personalized checking accounts to simplified mortgage loans, we provide financial solutions for every way
          you want to move forward.
        </p>
        <button className="text-white flex items-center font-medium border-2 border-primary bg-primary hover:bg-primary-hover px-10 py-3">
          BANK WITH US
        </button>
      </div>
      <div className="min-h-[40vh] xl:min-h-[85vh] bg-personalHeroBg bg-center bg-no-repeat bg-cover">
        {/* <Image src={personalHero} alt="personal image" /> */}
      </div>
    </section>
  );
}

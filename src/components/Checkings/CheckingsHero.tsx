export default function CheckingsHero() {
  return (
    <section className="bg-checkingHero bg-no-repeat min-h-[50vh] xl:min-h-[65vh] bg-right xl:bg-center xl:bg-cover grid place-content-center">
      <div className="container text-white xl:grid xl:grid-cols-2 xl:gap-x-32">
        <div className="bg-white text-secondary px-10 xl:pl-12 xl:pr-24 py-10 xl:min-w-[750px] flex flex-col justify-center">
          <h1 className="text-2xl xl:text-4xl mb-5">You’re not one size fits all.</h1>
          <p className="mb-5">So why is your checking account?</p>
          <button className="uppercase bg-primary text-white xl:w-[280px] h-[50px] text-sm font-medium tracking-widest">
            {"I'd"} like a recommendation
          </button>
        </div>
      </div>
    </section>
  );
}

export default function CheckingsHero() {
  return (
    <section className="bg-checkingHero bg-no-repeat min-h-[65vh] bg-center bg-cover grid place-content-center">
      <div className="container  text-white grid grid-cols-2 gap-x-32">
        <div className="bg-white text-secondary pl-12 pr-24 py-10 min-w-[750px] flex flex-col justify-center">
          <h1 className="text-4xl mb-5">You’re not one size fits all.</h1>
          <p className="mb-5">So why is your checking account?</p>
          <button className="uppercase bg-primary text-white w-[280px] h-[50px] text-sm font-medium tracking-widest">
            {"I'd"} like a recommendation
          </button>
        </div>
      </div>
    </section>
  );
}

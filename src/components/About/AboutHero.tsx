export default function AboutHero() {
  return (
    <section className="bg-aboutHeroBg min-h-[65vh] bg-top grid place-content-center">
      <div className="container  text-white grid grid-cols-2 gap-x-32">
        <div className="bg-secondary pl-12 pr-24 py-10 min-w-[750px] flex flex-col justify-center">
          <h1 className="text-5xl mb-8">Our story – starts with purpose.</h1>
          <p>
            We’re driven by a passion to help the clients and communities we serve find new horizons and all of the
            potential and possibility that comes with them.
          </p>
        </div>
      </div>
    </section>
  );
}

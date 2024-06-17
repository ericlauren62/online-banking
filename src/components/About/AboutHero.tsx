export default function AboutHero() {
  return (
    <section className="bg-aboutHeroBg min-h-[30rem] bg-left grid place-content-center">
      <div className="container  text-white grid grid-cols-2 gap-x-32">
        <div className="bg-black px-8 py-10 min-w-[600px] flex flex-col justify-center">
          <h2 className="text-xs mb-1 rounded-xl">Why Us</h2>
          <span className="h-1 w-10 bg-primary block mb-3 rounded-lg"></span>
          <h1 className="mb-3 text-3xl">As loyal as we are local.</h1>
          <p>
            There’s no question that the banking world has changed.
            <br />
            But one thing that hasn’t changed is our commitment to
            <br />
            the communities where we live and work.
          </p>
        </div>
      </div>
    </section>
  );
}

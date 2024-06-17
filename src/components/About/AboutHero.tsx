export default function AboutHero() {
  return (
    <section className="bg-aboutHeroBg min-h-[30rem] bg-left grid place-content-center">
      <div className="container  text-white grid grid-cols-2 gap-x-32">
        <div className="bg-black px-8 py-10 min-w-[600px] flex flex-col justify-center">
          <h2 className="text-xs mb-1 rounded-xl">PERSONAL BANKING</h2>
          <span className="h-1 w-10 bg-primary block mb-3 rounded-lg"></span>
          <h1 className="mb-3 text-3xl">Keep banking simple.</h1>
          <p>
            Nobody likes complications. That’s why we offer easy-to-understand account options, individual service, and
            a full set of features to help you handle your finances and take care of business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function BorrowingHero() {
  return (
    <section className="bg-borrowingHero bg-no-repeat min-h-[65vh] bg-center bg-cover grid place-content-center">
      <div className="container  text-white grid grid-cols-2 gap-x-32">
        <div className="bg-white text-secondary pl-12 pr-24 py-10 min-w-[750px] flex flex-col justify-center">
          <h1 className="text-4xl mb-5 leading-10">
            Borrowing for {"today's"} <br /> needs and {"tomorrow's"} <br /> dreams
          </h1>
        </div>
      </div>
    </section>
  );
}

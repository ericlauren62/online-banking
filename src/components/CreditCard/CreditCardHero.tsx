export default function CreditCardHero() {
  return (
    <section className="bg-creditCardHero bg-no-repeat min-h-[65vh] bg-center bg-cover grid place-content-center">
      <div className="container  text-white grid grid-cols-2 gap-x-32">
        <div className="bg-white text-secondary pl-12 pr-24 py-10 min-w-[750px] flex flex-col justify-center">
          <h1 className="text-5xl mb-5">Credit cards</h1>
          <p className="mb-5">Choose the credit cards that meet your needs.</p>
        </div>
      </div>
    </section>
  );
}

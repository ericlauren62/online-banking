import Image from "next/image";
// import depositHero from "/public/DepositSolutionsHero.jpg";

export default function DepositSolutionHero() {
  return (
    <section className="bg-depositSolutionHeroBg min-h-[65vh] bg-center bg-cover">
      <div className="container grid grid-cols-2 h-[60vh]">
        <div className="bg-white my-auto py-10 px-10">
          <h1 className="text-5xl mb-5">Deposit Solutions</h1>
          <p>Stay on top of your cash flow.</p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import heroImg from "/public/borrowinghero.jpg";
export default function BorrowingHero() {
  return (
    <section className="bg-borrowingHero bg-no-repeat min-h-[50vh]  xl:min-h-[65vh] bg-right xl:bg-center xl:bg-cover grid place-content-center">
      <div className="container  text-white xl:grid xl:grid-cols-2 xl:gap-x-32">
        <div className="bg-white text-secondary px-10 py-5 xl:pl-12 xl:pr-24 xl:py-10 xl:min-w-[750px] flex flex-col justify-center">
          <h1 className="text-2xl xl:text-4xl mb-5 xl:leading-10">
            Borrowing for {"today's"} <br /> needs and {"tomorrow's"} <br /> dreams
          </h1>
        </div>
      </div>
    </section>
  );
}

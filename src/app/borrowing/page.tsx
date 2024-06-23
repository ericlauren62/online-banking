import BorrowingFirstSection from "@/components/Borrowing/BorrowingFirstSection";
import BorrowingHero from "@/components/Borrowing/BorrowingHero";
import BorrowingSecondSection from "@/components/Borrowing/BorrowingSecondSection";

export default function page() {
  return (
    <>
      <BorrowingHero />
      <BorrowingFirstSection />
      <BorrowingSecondSection />
    </>
  );
}

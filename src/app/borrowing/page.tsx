import BorrowingFirstSection from "@/components/Borrowing/BorrowingFirstSection";
import BorrowingHero from "@/components/Borrowing/BorrowingHero";
import BorrowingSecondSection from "@/components/Borrowing/BorrowingSecondSection";
import MainLayout from "@/components/layouts/MainLayout";

export default function page() {
  return (
    <MainLayout>
      <BorrowingHero />
      <BorrowingFirstSection />
      <BorrowingSecondSection />
    </MainLayout>
  );
}

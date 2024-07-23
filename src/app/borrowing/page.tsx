import BorrowingFirstSection from "@/components/Borrowing/BorrowingFirstSection";
import BorrowingHero from "@/components/Borrowing/BorrowingHero";
import BorrowingSecondSection from "@/components/Borrowing/BorrowingSecondSection";
import MainLayout from "@/components/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Borrowing | First Horizon Bank",
  description:
    "First Horizon offers a variety of financial services nationwide. See how we serve our customers through personal, small business, commercial banking",
};

export default function page() {
  return (
    <MainLayout>
      <BorrowingHero />
      <BorrowingFirstSection />
      <BorrowingSecondSection />
    </MainLayout>
  );
}

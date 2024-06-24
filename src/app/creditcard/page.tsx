import CreditCardFirstSection from "@/components/CreditCard/CreditCardFirstSection";
import CreditCardHero from "@/components/CreditCard/CreditCardHero";
import CreditCardSecondSection from "@/components/CreditCard/CreditCardSecondSection";
import MainLayout from "@/components/layouts/MainLayout";

export default function page() {
  return (
    <MainLayout>
      <CreditCardHero />
      <CreditCardFirstSection />
      <CreditCardSecondSection />
    </MainLayout>
  );
}

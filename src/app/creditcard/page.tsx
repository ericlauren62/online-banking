import CreditCardFirstSection from "@/components/CreditCard/CreditCardFirstSection";
import CreditCardHero from "@/components/CreditCard/CreditCardHero";
import CreditCardSecondSection from "@/components/CreditCard/CreditCardSecondSection";

export default function page() {
  return (
    <>
      <CreditCardHero />
      <CreditCardFirstSection />
      <CreditCardSecondSection />
    </>
  );
}

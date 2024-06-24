import CheckingsFirstSection from "@/components/Checkings/CheckingsFirstSection";
import CheckingsHero from "@/components/Checkings/CheckingsHero";
import MainLayout from "@/components/layouts/MainLayout";

export default function page() {
  return (
    <MainLayout>
      <CheckingsHero />
      <CheckingsFirstSection />
    </MainLayout>
  );
}

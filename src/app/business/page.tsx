import BusinessFirstSection from "@/components/Businesspage/BusinessFirstSection";
import Hero from "@/components/Businesspage/Hero";
import MainLayout from "@/components/layouts/MainLayout";

export default function Business() {
  return (
    <MainLayout>
      <Hero />
      <BusinessFirstSection />
    </MainLayout>
  );
}

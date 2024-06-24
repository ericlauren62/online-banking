import Featured from "@/components/Homepage/Featured";
import Hero from "@/components/Homepage/Hero";
import HomeFirstSection from "@/components/Homepage/HomeFirstSection";
import HomeForthSection from "@/components/Homepage/HomeForthSection";
import HomeSecondSection from "@/components/Homepage/HomeSecondSection";
import HomeThirdSection from "@/components/Homepage/HomeThirdSection";
import MainLayout from "@/components/layouts/MainLayout";
import { Fragment } from "react";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Featured />
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeForthSection />
    </MainLayout>
  );
}

import Hero from "@/components/Homepage/Hero";
import HomeFirstSection from "@/components/Homepage/HomeFirstSection";
import HomeSecondSection from "@/components/Homepage/HomeSecondSection";
import HomeThirdSection from "@/components/Homepage/HomeThirdSection";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
    </Fragment>
  );
}

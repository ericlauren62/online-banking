import Featured from "@/components/Homepage/Featured";
import Hero from "@/components/Homepage/Hero";
import HomeFirstSection from "@/components/Homepage/HomeFirstSection";
import HomeSecondSection from "@/components/Homepage/HomeSecondSection";
import HomeThirdSection from "@/components/Homepage/HomeThirdSection";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Featured />
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
    </Fragment>
  );
}

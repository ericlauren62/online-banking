import React from "react";
import HomeThirdSectionCard from "./HomeThirdSectionCard";

export default function HomeThirdSection() {
  return (
    <section className="container my-20">
      <span className="h-1 w-10 bg-primary block mb-2 rounded-lg"></span>
      <h2 className="text-3xl font-medium mb-5">On the Horizon</h2>
      <p className="max-w-[600px] mb-10">
        We love it here. Chances are you do too. So sit back, kick up your boots, and catch up on community news and
        notes.{" "}
      </p>

      <div className="grid grid-cols-3 gap-x-10 items-center">
        <HomeThirdSectionCard />
        <HomeThirdSectionCard />
        <HomeThirdSectionCard />
      </div>
    </section>
  );
}

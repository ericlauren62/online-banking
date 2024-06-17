import Image from "next/image";
import integrity from "/public/integrity.png";
import excellence from "/public/excellence.webp";
import innovation from "/public/innovation.webp";
import teamwork from "/public/teamwork.webp";
import accountability from "/public/accountability.webp";

export default function AboutSecondSection() {
  return (
    <section className="container py-20">
      <h2 className="text-4xl font-bold mb-20">Our Values</h2>
      <div className="grid grid-cols-3 gap-x-10 gap-y-16">
        <div>
          <div className="mb-5">
            <Image src={integrity} alt="integrity" />
          </div>
          <h3 className="font-medium mb-4 text-xl">Integrity</h3>
          <p>
            Do the right thing, even when no one is watching. We strive to be honest and authentic in everything we do.
            This includes building trusting relationships and always doing what’s best for our company and customers.
          </p>
        </div>
        <div>
          <div className="mb-5">
            <Image src={teamwork} alt="teamwork" />
          </div>
          <h3 className="font-medium mb-4 text-xl">Team Work</h3>
          <p>
            Always win together. We want to help and support those around us and celebrate one another’s
            accomplishments. Interested in joining a team that unites together for positive results? Click here for our
            career info.
          </p>
        </div>
        <div>
          <div className="mb-5">
            <Image src={innovation} alt="innovation" />
          </div>
          <h3 className="font-medium mb-4 text-xl">Innovation</h3>
          <p>
            Embrace and encourage change. We consider new approaches to solving problems and create value through new
            technologies and resources. Finding forward-thinking solutions to serve our customers is key.
          </p>
        </div>
        <div>
          <div className="mb-5">
            <Image src={excellence} alt="excellence" />
          </div>
          <h3 className="font-medium mb-4 text-xl">Excellence</h3>
          <p>
            Our customers deserve our best work. That’s why we want to deliver a memorable customer experience with
            passion, consistency, and focus. We also work to produce products and services that exceed expectations.
          </p>
        </div>
        <div>
          <div className="mb-5">
            <Image src={accountability} alt="accountability" />
          </div>
          <h3 className="font-medium mb-4 text-xl">Accountability</h3>
          <p>
            It’s important to own it. We take responsibility for our actions and bravely accept and provide heartfelt
            feedback to one another. We keep our word and follow through on commitments.
          </p>
        </div>
      </div>
    </section>
  );
}

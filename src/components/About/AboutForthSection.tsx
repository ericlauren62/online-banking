import Image from "next/image";

export default function AboutForthSection() {
  return (
    <section className="grid grid-cols-3 container py-20">
      <div className="border-r border-gray2 py-10 pl-10">
        <Image
          src="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Group-of-people.svg"
          alt=""
          height={60}
          width={60}
          className="mb-5"
        />
        <h2 className="text-3xl font-light">7,300+ Associates</h2>
      </div>
      <div className="border-r border-gray2 py-10 ml-8">
        <Image
          src="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Cityscape.svg"
          alt=""
          height={60}
          width={60}
          className="mb-5"
        />
        <h2 className="text-3xl font-light">418 Locations</h2>
      </div>
      <div className="py-10 ml-8">
        <Image
          src="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Bar-Graph-Outline.svg"
          alt=""
          height={60}
          width={60}
          className="mb-5"
        />
        <h2 className="text-3xl font-light">$81.7 Billion Total Assets</h2>
      </div>
    </section>
  );
}

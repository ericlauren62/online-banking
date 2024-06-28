import React from "react";
import Card from "../Shared/Card";

export default function SmallBusinessThirdSection() {
  return (
    <section className="container xl:mt-20">
      <h2 className="text-2xl xl:text-4xl font-medium mb-10">Brush up on business finance</h2>

      <div className="grid xl:grid-cols-2 gap-10 items-center">
        <Card
          title="When Business Gets Personal"
          description="Separate your personal and business accounts to simplify accounting, save time and boost your bottom line."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Link-accounts.svg"
        />
        <Card
          title="Why Small Businesses Need to Rethink Risk Management"
          description="Stay prepared when a crisis hits with these strategies to keep your small business capitalized through boom-bust cycles."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Article.svg"
        />
        <Card
          title="Business Continuity Planning"
          description="Having a business continuity plan in place could redouble your operating resilience when the unexpected strikes."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-Accountserviceguide.svg"
        />
        <Card
          title="3 Financial Statements Your Business Plan Must Include"
          description="Learning how major financial statements all intertwine can help you gauge the financial health of your business."
          imgUrl="https://www.firsthorizon.com/-/media/Images/Icons/General/SVGs/FHBIcons/FHB-checklist.svg"
        />
      </div>
    </section>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import { IoChevronForwardOutline } from "react-icons/io5";
// import Card from "../Shared/Card";

// interface SmallBusinessThirdSectionCardProps {
//   title: string;
//   description: string;
//   imgUrl: string;
// }

// function SmallBusinessThirdSectionCard({ title, description, imgUrl }: SmallBusinessThirdSectionCardProps) {
//   return (
//     <div className="bg-gray-100 p-12 flex bg-white">
//       <div>
//         <h2 className="font-medium text-lg mb-3 text-primary-hover">{title}</h2>
//         <p className="mb-8">{description}</p>

//         <Link href="#" className="flex items-center gap-x-4 font-medium tracking-wider">
//           READ MORE
//           <span className="block bg-primary text-white rounded-[100%] p-1">
//             <IoChevronForwardOutline />
//           </span>
//         </Link>
//       </div>
//       <div className="w-[30%] mt-auto">
//         <Image src={imgUrl} alt="love and money" height={70} width={70} />
//       </div>
//     </div>
//   );
// }

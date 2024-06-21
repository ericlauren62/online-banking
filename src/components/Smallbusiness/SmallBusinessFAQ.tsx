import Accordion from "../Shared/Accordion";

interface Content {
  subtitle: string;
  text: string;
}

interface AccordionItem {
  title: string;
  description: string;
  contents: Content[];
}

export default function SmallBusinessFAQ() {
  const accordionData: AccordionItem[] = [
    {
      title: "What documents do I need to open a business bank account?",
      description:
        "The specific documents required can vary depending on the bank and your business structure. However, some general requirements include: ",
      contents: [
        {
          subtitle: "Business Formation Documents",
          text: "This could be articles of incorporation (corporation), articles of organization (LLC), or a business registration certificate (sole proprietorship).",
        },
        {
          subtitle: "Employer Identification Number (EIN):",
          text: "This is obtained from the IRS and acts like a Social Security number for your business. In some cases, a sole proprietor can use their Social Security number instead.",
        },
        {
          subtitle: "Identification for Owners and Signatories",
          text: "Government-issued IDs (driver's license, passport) for everyone authorized to manage the account.",
        },
        {
          subtitle: "Business License (if applicable)",
          text: "Depending on your location and industry, you might need a business license.",
        },
      ],
    },
    {
      title: "Can I open a business account online? ",
      description:
        "Yes! First Horizon allows you to open a business deposit account online. This can be a convenient option, but it might not be available for all business types or account features. Here are some things to consider: ",
      contents: [
        {
          subtitle: "Account Features:",
          text: "Check if the online application offers the features you need, like multiple signatories or online bill pay.",
        },
        {
          subtitle: "Document Uploads:",
          text: "Check if the online application offers the features you need, like multiple signatories or online bill pay.",
        },
        {
          subtitle: "Funding:",
          text: "Government-issued IDs (driver's license, passport) for everyone authorized to manage the account.",
        },
      ],
    },
    {
      title: "What are the benefits of having a separate business bank account?",
      description: "There are several advantages to having a separate business bank account: ",
      contents: [
        {
          subtitle: "Clarity and Organization:",
          text: "Separates your business income and expenses from personal finances, making bookkeeping and tax filing easier.",
        },
        {
          subtitle: "Professional Image:",
          text: "Projects a more professional image to clients and vendors.",
        },
        {
          subtitle: "Improved Credit History:",
          text: "Helps establish business credit, which can be crucial for future loans and financing.",
        },
        {
          subtitle: "Fraud Protection:",
          text: "Minimizes the risk of personal finances being affected by business-related fraud.",
        },
      ],
    },
  ];
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-medium">Small Business Banking FAQs.</h2>
      <Accordion accordionData={accordionData} />
    </section>
  );
}

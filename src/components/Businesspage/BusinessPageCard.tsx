import Link from "next/link";

interface BusinessPageCardProps {
  title: string;
  description: string;
  url: string;
}

export default function BusinessPageCard({ title, description, url }: BusinessPageCardProps) {
  return (
    <div className="px-6">
      <h2 className="mb-3 text-xl font-bold">{title}</h2>
      <p className="mb-5 text-sm">{description}</p>
      <Link href={url} className="bg-primary rounded-md px-8 py-3 inline-block text-white font-medium">
        Learn More
      </Link>
    </div>
  );
}

import Link from "next/link";

interface PersonalCardProps {
  title: String;
  description: String;
  items: String[];
  url: string;
}

export default function PersonalCard({ title, description, items, url }: PersonalCardProps) {
  return (
    <div className="text-lg">
      <h2 className="text-3xl mb-4 font-bold">{title}</h2>
      <p className="max-w-[450px] mb-5">{description}</p>
      <div className="mb-8">
        {items.map((item, id) => {
          return (
            <p key={id} className="flex items-center gap-x-2 mb-1">
              <span className="h-2 w-2 rounded-[100%] bg-primary block"></span>
              {item}
            </p>
          );
        })}
      </div>
      <Link href={url} className="bg-primary px-8 py-3 text-white">
        {" "}
        Learn More
      </Link>
    </div>
  );
}

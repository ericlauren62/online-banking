import { FaClock } from "react-icons/fa";

export default function HomeThirdSectionCard() {
  return (
    <div className="bg-gray-100 p-8">
      <div className="flex items-center justify-end gap-x-2 mb-5">
        <span className="text-primary">
          <FaClock />
        </span>
        Jun 10, 2024
      </div>
      <div>
        <h2 className="font-medium text-lg mb-5">Juneteenth Holiday</h2>
        <p>
          All of our branches will be closed on Wednesday, June 19th in observance of Juneteenth. We will resume normal
          hours Thursday, June 20.
        </p>
      </div>
    </div>
  );
}

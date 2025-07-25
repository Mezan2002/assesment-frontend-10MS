import { Checklist } from "@/types";
import Image from "next/image";

const Checklists = ({
  checklistContent,
}: {
  checklistContent: Checklist[];
}) => {
  return (
    <div className="p-4 w-full">
      <h6 className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</h6>

      <ul className="pl-5">
        {checklistContent.map((item, index) => (
          <li
            key={index}
            className="text-gray-700 mb-2 flex items-center gap-4 -ml-5"
          >
            <Image src={item.icon} alt={item.text} width={20} height={20} />
            <p className="mb-0 inline-block tracking-[0.005em] text-[#111827]">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklists;

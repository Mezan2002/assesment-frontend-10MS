import { Section } from "@/types";
import { Check } from "react-feather";

const WhatYouWillLearn = ({
  whatYouWillLearnData,
}: {
  whatYouWillLearnData: Section;
}) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {whatYouWillLearnData.values.map((item) => (
          <div key={item.id} className="flex gap-2 mb-2">
            <p>
              <Check className="text-[#6294F8] size-5" />
            </p>
            <p className="text-md font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouWillLearn;

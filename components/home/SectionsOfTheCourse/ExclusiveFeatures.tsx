import { Section } from "@/types";
import Image from "next/image";
import { Check } from "react-feather";

const ExclusiveFeatures = ({
  exclusiveFeaturesData,
}: {
  exclusiveFeaturesData: Section;
}) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg">
      {exclusiveFeaturesData.values.map((item, index) => {
        const isLastIndex = index === exclusiveFeaturesData.values.length - 1;
        return (
          <div
            key={item.id}
            className={isLastIndex ? "mt-5" : "border-b border-gray-300"}
          >
            <div className="flex gap-3 mb-4">
              <div className="flex flex-col flex-1 gap-2">
                <h6 className="text-md text-gray-900">
                  {item.title || "Feature Title"}
                </h6>
                <div>
                  <ul>
                    {item.checklist &&
                      item.checklist.map((singleItem) => (
                        <li key={singleItem} className="flex gap-4 my-3.5">
                          <p>
                            <Check className="text-[#6294F8] size-5" />
                          </p>
                          <p className="text-md text-gray-600 font-medium">
                            {singleItem}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <Image
                src={item.file_url || ""}
                alt={item.title || "Feature image"}
                width={256}
                height={208}
                className="w-64"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExclusiveFeatures;

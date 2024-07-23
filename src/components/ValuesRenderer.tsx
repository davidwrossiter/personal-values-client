import React from "react";

interface Section {
  title: string;
  items: string[];
}

interface ValuesRendererProps {
  data: string;
}

const parseData = (input: string): Section[] => {
  const sections = input.split(/(?=###)/);
  return sections.map((section) => {
    const [title, ...items] = section
      .split("\n")
      .filter((line) => line.trim() !== "");
    return {
      title: title.replace("###", "").trim(),
      items: items.map((item) => item.replace("-", "").trim()),
    };
  });
};

const ValuesRenderer: React.FC<ValuesRendererProps> = ({ data }) => {
  const sections = parseData(data);

  return (
    <div className="flex flex-row max-w-[1000px] flex-wrap overflow-y-scroll">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col mb-4 w-80 mt-8">
          <p className="font-bold text-lg">{section.title}</p>
          {section.items.map((item, itemIndex) => (
            <p className="ml-2 mt-2" key={itemIndex}>
              {" "}
              • {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ValuesRenderer;

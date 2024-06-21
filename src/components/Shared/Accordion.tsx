"use client";

import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface Content {
  subtitle: string;
  text: string;
}

interface AccordionItem {
  title: string;
  description: string;
  contents: Content[];
}

interface AccordionDataProps {
  accordionData: AccordionItem[];
}

const Accordion = ({ accordionData }: AccordionDataProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close the accordion if it's already open
    } else {
      setActiveIndex(index); // open the accordion
    }
  };

  return (
    <div className="mt-6">
      {accordionData.map((item: AccordionItem, index: number) => (
        <div key={index} className="">
          <button onClick={() => toggleAccordion(index)} className="w-full text-left pb-2 focus:outline-none">
            <div className="flex justify-between items-center bg-primary p-5 text-white">
              <span className="text-lg font-medium">{item.title}</span>
              <div className="text-2xl">{activeIndex !== null && activeIndex === index ? <FiMinus /> : <FiPlus />}</div>
            </div>
          </button>
          {activeIndex === index && (
            <div className="p-3">
              <p className="mb-4">{item.description}</p>
              <ul className="grid gap-y-2 px-8">
                {item.contents.map((content, id) => {
                  return (
                    <li key={id} className="list-disc list-inside">
                      <strong>{content.subtitle}</strong> {content.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import { useState } from "react";
import { plans } from "../../utils/const";
import { ChevronUp } from "../Icons/ChevronUp";
import { ChevronDown } from "../Icons/ChevronDown";

const AccordionPlanos = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderStyledText = (text) => {
    const boldRegex = /\*([^*]+)\*/g;
    const greenRegex = /#([^#]+)#/g;

    return text
      .split(boldRegex)
      .map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-bold">{part}</span>
        ) : (
          part.split(greenRegex).map((partGreen, j) =>
            j % 2 === 1 ? (
              <span key={j} className="text-green-500 font-normal">{partGreen}</span>
            ) : (
              partGreen
            )
          )
        )
      );
  };

  const renderSubtitleWithGreenText = (subtitle) => {
    const greenRegex = /#([^#]+)#/g;
    return subtitle.split(greenRegex).map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="text-green-500">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full max-w-2xl mt-10">
      {plans.map((plan, index) => (
        <div key={index} className="border-b border-gray-300 text-gray-600">
          <button
            className="w-full text-left p-4 flex justify-between items-center font-bold bg-white-100 hover:bg-white-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-blue-black">
              {plan.title} <br />
              <span className="font-normal text-blue-regular">
                {renderSubtitleWithGreenText(plan.subtitle)} 
              </span>
            </span>
            <span>{openIndex === index ? <ChevronUp /> : <ChevronDown />}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white border-t border-gray-300">
              {plan.content.split("\n").map((line, i) => (
                <p key={i} className="text-sm text-gray-700 mb-2">
                  {renderStyledText(line)} 
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionPlanos;

"use client";

import { useEffect, useState } from "react";
import DiamondIcon from "../components/icons/diamondIcon/DiamondIcon";

export default function Servicios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [accordionItems, setAccordionItems] = useState([]);

  const fetchAccordionItems = async () => {
    try {
      const response = await fetch("https://res.cloudinary.com/daywmqj27/raw/upload/v1737560978/jewerly-settings/benefits.settings.json");
      const data = await response.json();
      const items = data.content;
      setAccordionItems(items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAccordionItems();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4 py-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Servicios & Beneficios
      </h1>
      <div className="space-y-4 pt-5">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-t">
            <button
              className={`w-full text-left p-4 hover:bg-gray-200 font-semibold focus:outline-none ${
                activeIndex === index ? "text-blue-500" : "text-black"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex space-x-2">
              <DiamondIcon width={15} heigth={15} className={activeIndex === index ? 'fill-blue-500': 'black'}></DiamondIcon>
              <p>{item.title}</p>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

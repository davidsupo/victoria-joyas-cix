"use client";

import { useEffect, useState } from "react";
import ProductSection from "./components/product/ProductSection";
import Slider from "./components/slider/Slider";

export default function Home() {
  const [config, setConfig] = useState({});

  const fetchSettings = async () => {
    try {
      const response = await fetch("https://res.cloudinary.com/daywmqj27/raw/upload/v1737560978/jewerly-settings/home.settings.json");
      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <>
      <Slider images={config.sliders && config.sliders.map(slider => slider.urlImage)}></Slider>
      <div className="container mx-auto p-10">
        {config.sections && <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProductSection
            className="md:w-full min-h-[300px] md:min-h-[500px]"
            title={config?.sections[0]?.title}
            image={config?.sections[0]?.urlImage}
            description={config?.sections[0]?.description}/>
            <ProductSection
            className="md:w-full min-h-[300px] md:min-h-[500px]"
            title={config?.sections[1]?.title}
            image={config?.sections[1]?.urlImage}
            description={config?.sections[1]?.description}/>
          </div>
          <div className="mt-10">
            <ProductSection
            className="md:w-full min-h-[300px] md:min-h-[500px]"
            title={config?.sections[2]?.title}
            image={config?.sections[2]?.urlImage}
            description={config?.sections[2]?.description}/>
          </div>
        </>}
      </div>
    </>
  );
}
